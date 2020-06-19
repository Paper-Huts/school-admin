import { StudentActionTypes } from './StudentsTypes'

export const addStudentApplicant = student => ({
  type: StudentActionTypes.ADD_STUDENT_APPLICANT,
  payload: student
})