import { StudentActionTypes } from './StudentsTypes'

export const addStudentApplicant = student => ({
  type: StudentActionTypes.ADD_STUDENT_APPLICANT,
  payload: student
})

export const updateStudentTuitionOwed = (studentUid, tuitionOwedAfterPayment) => ({
  type: StudentActionTypes.UPDATE_STUDENT_TUITION_OWED,
  payload: { studentUid, tuitionOwedAfterPayment }
});