export const ROLES = {
  staff: "staff",
  supplier: "supplier",
};

export const ROLE_DASHBOARD_PATHS = {
  [ROLES.supplier]: ["orders", "inventory"],
  [ROLES.staff]: ["orders", "requisitions", "people"],
};
