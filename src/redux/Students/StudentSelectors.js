import { createSelector } from 'reselect'

const selectStudents = state => state.students

export const selectStudentApplicants = createSelector(
  [selectStudents],
  students => students.studentApplicants
);

export const selectStudentList = createSelector(
  [selectStudents],
  students => Object.keys(students.studentList).map(studentUID => students.studentList[studentUID])
);