import { StudentActionTypes } from "./StudentsTypes";
import { updateStudentTuitionOwed } from "./StudentUtils";
import { students } from './StudentData'

const INITIAL_STATE = {
  studentApplicants: null,
  studentList: students.studentList
};

const studentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StudentActionTypes.ADD_STUDENT_APPLICANT:
      return {
        ...state,
        studentApplicants: action.payload
      };

    case StudentActionTypes.UPDATE_STUDENT_TUITION_OWED:
      return {
        ...state,
        studentList: updateStudentTuitionOwed(state.studentList, action.payload.studentUid, action.payload.tuitionOwedAfterPayment)
      }

    default:
      return state;
  }
};

export default studentsReducer;
