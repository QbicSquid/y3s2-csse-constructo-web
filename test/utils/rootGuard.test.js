import rootGuard, { isPathAllowed } from "../../src/utils/rootGuard";
import { ROLES, ROLE_DASHBOARD_PATHS } from "../../src/constants/roles";

// Mock localStorage for the tests
global.localStorage = {
  getItem: jest.fn(() => {
    return JSON.stringify({
      email: "shifan.staff@gmail.com",
      password: "P@ssw0rd",
      role: "staff",
    });
  }),
  pathname: "/dashboard/orders",
};

global.window = {
  location: {
    assign: jest.fn(),
    forwards: jest.fn(),
  },
};

describe("rootGuard", () => {
  test("redirects to login if user is not authenticated", () => {
    global.localStorage.getItem.mockReturnValueOnce(null);
    const assignMock = jest.fn();
    global.window.location.assign = assignMock;

    rootGuard();

    expect(assignMock).toHaveBeenCalledWith("/login");
  });

  test("redirects to default dashboard path if path is not allowed", () => {
    global.localStorage.getItem.mockReturnValueOnce(
      JSON.stringify({ role: ROLES.staff })
    );
    global.window.location.pathname = "/dashboard/someNotAllowedPath";
    const assignMock = jest.fn();
    global.window.location.assign = assignMock;

    rootGuard();

    const allowedPaths = ROLE_DASHBOARD_PATHS[ROLES.staff];
    expect(assignMock).toHaveBeenCalledWith(`/dashboard/${allowedPaths[0]}`);
  });

  test("does not redirect if path is allowed", () => {
    global.localStorage.getItem.mockReturnValueOnce(
      JSON.stringify({ role: ROLES.staff })
    );
    global.window.location.pathname = "/dashboard/allowedPath";

    rootGuard();

    // Since the path is allowed, no redirect should occur
    expect(global.window.location.forwards).not.toHaveBeenCalled();
  });
});

describe("isPathAllowed", () => {
  test("returns true if path is allowed", () => {
    global.localStorage.getItem.mockReturnValueOnce(
      JSON.stringify({ role: ROLES.staff })
    );
    const allowedPaths = ROLE_DASHBOARD_PATHS[ROLES.staff];

    allowedPaths.forEach((path) => {
      expect(isPathAllowed(path)).toBe(true);
    });
  });

  test("returns false if path is not allowed", () => {
    global.localStorage.getItem.mockReturnValueOnce(
      JSON.stringify({ role: ROLES.staff })
    );
    const notAllowedPath = "someNotAllowedPath";

    expect(isPathAllowed(notAllowedPath)).toBe(false);
  });
});
