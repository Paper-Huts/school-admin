import { createSelector } from 'reselect'

const selectSchoolStats = state => state.schoolStats

export const selectSummaryStats = createSelector(
  [selectSchoolStats],
  schoolStats => Object.keys(schoolStats.summaryStats).map(stat => schoolStats.summaryStats[stat])
)

export const selectAdmissionStats = createSelector(
  [selectSchoolStats],
  schoolStats => Object.keys(schoolStats.admissionStats).map(stat => schoolStats.admissionStats[stat])
)