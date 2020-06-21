import { createSelector } from 'reselect'

const selectSchoolStats = state => state.schoolStats

export const selectSummaryStats = createSelector(
  [selectSchoolStats],
  schoolStats => schoolStats.summaryStats
)

export const selectAdmissionStats = createSelector(
  [selectSchoolStats],
  schoolStats => schoolStats.admissionStats
)