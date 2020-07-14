import { createSelector } from 'reselect';

const selectGradeLevels = state => state.grades;

export const selectGradeLevelsForList = createSelector(
  [selectGradeLevels],
  grades => Object.keys(grades.gradeLevels).map(gradeLevel => grades.gradeLevels[gradeLevel])
);

export const selectGradeLevelsForReference = createSelector(
  [selectGradeLevels],
  grades => grades.gradeLevels
);