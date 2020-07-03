import { createSelector } from 'reselect'

const selectStudents = state => state.students

export const selectStudentApplicants = createSelector(
  [selectStudents],
  students => students.studentApplicants
);

export const selectStudentList = createSelector(
  [selectStudents],
  students => students.studentList
);

export const selectStudent = studentUid => createSelector(
  [selectStudentList],
  studentList => studentList[studentUid]
);

export const selectStudentListForTable = createSelector(
  [selectStudentList],
  studentList => Object.keys(studentList).map(studentUid => studentList[studentUid])
);

export const selectStudentTuitionOwed = studentUid => createSelector(
  [selectStudentList],
  studentList => studentList[studentUid].tuitionOwed
);