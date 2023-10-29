export const ROLES = {
  staff: "staff",
  supplier: "supplier",
};

export const ROLE_DASHBOARD_PATHS = {
  [ROLES.supplier]: ["orders", "requisitions", "inventory", "settings"],
  [ROLES.staff]: ["people", "suppliers", "settings"],
};
