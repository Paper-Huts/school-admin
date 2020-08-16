import { createSelector } from 'reselect'

const selectStudents = state => state.students

// Selectors related to Student Applicants 

export const selectStudentApplicants = createSelector(
  [selectStudents],
  students => students.studentApplicants
);

export const selectStudentApplicantsArray = createSelector(
  [selectStudentApplicants],
  studentApplicants => studentApplicants ? Object.keys(studentApplicants).map(applicantId => studentApplicants[applicantId]) : []
);

export const selectStudentApplicant = studentApplicantUrlParam => createSelector(
  [selectStudentApplicants],
  studentApplicants => studentApplicants ? studentApplicants[studentApplicantUrlParam] : null
)

// Selectors related to Student List

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