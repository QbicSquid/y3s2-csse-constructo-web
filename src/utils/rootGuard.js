"use client"

import { ROLES, ROLE_DASHBOARD_PATHS } from "../constants/roles";

const rootGuard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.assign("/login");
    return;
  }
  const allowedPaths = ROLE_DASHBOARD_PATHS[user.role];
  if (!isPathAllowed()) window.location.assign(`/dashboard/${allowedPaths[0]}`);
};

export const isPathAllowed = (explicitPath = null) => {
  const fullPath = window.location.pathname;
  const path = explicitPath || fullPath.split("/")[2];
  const user = JSON.parse(localStorage.getItem("user"));

  const allowedPaths = ROLE_DASHBOARD_PATHS[user.role];
  if (allowedPaths.includes(path)) {
    return true;
  } else {
    return false;
  }
};

export default rootGuard;
