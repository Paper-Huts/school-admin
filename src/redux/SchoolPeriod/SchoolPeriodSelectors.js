import { createSelector } from 'reselect'

const selectSchoolPeriod = state => state.schoolPeriod;

export const selectCurrentSchoolPeriod = createSelector(
  [selectSchoolPeriod],
  schoolPeriod => schoolPeriod.currentSchoolPeriod
);