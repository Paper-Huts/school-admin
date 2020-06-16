import { StudentActionTypes } from './StudentsTypes'

const addStudentApplicant = student => ({
  type: StudentActionTypes.ADD_STUDENT_APPLICANT,
  payload: student
})