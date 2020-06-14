import { createSelector } from 'reselect'

const selectStudents = state => state.students

export const selectStudentApplicants = createStructuredSelector(
  [selectStudents],
  students => studentApplicants
)