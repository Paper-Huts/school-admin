import { createSelector } from 'reselect';

const selectTuition = state => state.tuition;

export const selectTuitionByGradeLevel = createSelector(
  [selectTuition],
  tuition => tuition.tuitionByGradeLevel
);