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

export const selectTuitionPaymentRecords = createSelector(
  [selectTuition],
  tuition => tuition.tuitionPaymentRecords
);

//returns the list of payment history records given a particular student record
export const selectStudentTuitionPaymentRecords = studentUid => createSelector(
  [selectTuitionPaymentRecords],
  tuitionPaymentRecords => tuitionPaymentRecords.filter(record => record.studentUid === studentUid)
);