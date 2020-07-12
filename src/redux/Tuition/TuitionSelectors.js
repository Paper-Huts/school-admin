import { createSelector } from 'reselect';

const selectTuition = state => state.tuition;

//returns a json object of tuition & fees for all grade levels
export const selectTuitionByGradeLevel = createSelector(
  [selectTuition],
  tuition => tuition.tuitionByGradeLevel
);

//returns a list of tuition & fees for all grade levels
export const selectTuitionListByGradeLevel = createSelector(
  [selectTuitionByGradeLevel],
  tuitionByGradeLevel => Object.keys(tuitionByGradeLevel).map(grade => tuitionByGradeLevel[grade])
);

//returns the list of all tuition payment history records
export const selectTuitionPaymentRecords = createSelector(
  [selectTuition],
  tuition => tuition.tuitionPaymentRecords
);

//returns the list of payment history records given a particular student record
export const selectStudentTuitionPaymentRecords = studentUid => createSelector(
  [selectTuitionPaymentRecords],
  tuitionPaymentRecords => tuitionPaymentRecords.filter(record => record.studentUid === studentUid)
);