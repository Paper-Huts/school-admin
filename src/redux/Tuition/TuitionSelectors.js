import { createSelector } from 'reselect';

const selectTuition = state => state.tuition;

export const selectTuitionListByGradeLevel = createSelector(
  [selectTuition],
  tuition => tuition.tuitionListByGradeLevel
);


export const selectTuitionListByGradeLevelForList = createSelector(
  [selectTuitionListByGradeLevel],
  tuitionListByGradeLevel => Object.keys(tuitionListByGradeLevel).map(grade => tuitionListByGradeLevel[grade])
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