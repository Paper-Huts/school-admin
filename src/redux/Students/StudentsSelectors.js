import { createSelector } from 'reselect'

const selectStudents = state => state.students

export const selectStudentApplicants = createSelector(
  [selectStudents],
  students => students.studentApplicants
)