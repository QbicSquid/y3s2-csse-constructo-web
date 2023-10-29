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
    forward: jest.fn(),
  },
};

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
