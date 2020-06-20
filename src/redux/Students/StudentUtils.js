//takes the current student list, finds a student and updates the students tuition owed after a payment has been made
export const updateStudentTuitionOwed = (
  studentList,
  studentUid,
  tuitionOwedAfterPayment
) => {
  const existingStudent = studentList[studentUid];

  console.log("Existing Student: ", existingStudent);

  if (existingStudent) {
    return {
      ...studentList,
      [studentUid]: { ...existingStudent, tuitionOwed: tuitionOwedAfterPayment }
    }
  }

  return {
    ...studentList,
  };
};
