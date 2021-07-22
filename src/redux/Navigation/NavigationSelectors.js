import { createSelector } from "reselect";

export const selectNavigation = (state) => state.navigation;

export const selectAdmissionsNav = createSelector(
  [selectNavigation],
  (navigation) => navigation.admissionsNav
);
