import { createSelector } from 'reselect';

const selectTuition = state => state.tuition;

export const selectTuitionByGrade = createSelector(
  [selectTuition],
  tuition => tuition.tuitionByGrade
);

export const selectTuitionByGradeForList = createSelector(
  [selectTuitionByGrade],
  tuitionByGrade => Object.keys(tuitionByGrade).map(grade => tuitionByGrade[grade])
);

export const selectTuitionPaymentHistory = createSelector(
  [selectTuition],
  tuition => tuition.tuitionPaymentHistory
);

//returns the list of payment history records given a particular student record
export const selectStudentTuitionPaymentHistory = studentUid => createSelector(
  [selectTuitionPaymentHistory],
  tuitionPaymentHistory => tuitionPaymentHistory.filter(record => record.studentUid === studentUid)
);