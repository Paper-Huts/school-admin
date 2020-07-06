import { StudentActionTypes } from './StudentsTypes'

export const addStudentApplicant = studentApplicant => ({
  type: StudentActionTypes.ADD_STUDENT_APPLICANT,
  payload: studentApplicant
})

export const updateStudentTuitionOwed = (studentUid, tuitionOwedAfterPayment) => ({
  type: StudentActionTypes.UPDATE_STUDENT_TUITION_OWED,
  payload: { studentUid, tuitionOwedAfterPayment }
});