import { createSelector } from 'reselect'

const selectSchoolPeriod = state => state.schoolPeriod;

export const selectCurrentSchoolPeriod = createSelector(
  [selectSchoolPeriod],
  schoolPeriod => schoolPeriod.currentSchoolPeriod
);

export const selectSchoolPeriods = createSelector(
  [selectSchoolPeriod],
  schoolPeriod => schoolPeriod.schoolPeriods
);

export const selectSchoolPeriodByYearAndTerm = (year, term) => createSelector(
  [selectSchoolPeriods],
  schoolPeriods => schoolPeriods.find(schoolPeriod => schoolPeriod.academicYear === year && schoolPeriod.academicTerm === term)
);