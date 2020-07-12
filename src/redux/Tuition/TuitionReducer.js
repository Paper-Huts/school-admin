import { TuitionActionTypes } from "./TuitionTypes";
import { addTuitionForGrade } from "./TuitionUtils";

const INITIAL_STATE = {
  tuitionPaymentRecords: [
    {
      id: 0,
      studentUid: "",
      date: "",
      paidBy: "",
      paymentAmount: 0,
      tuitionOwed: 0,
      schoolPeriodId: "",
      academicYear: "",
      academicTerm: 0,
      receiptNumber: "",
    },
  ],
  tuitionListByGradeLevel: {
    n1: {
      id: 0,
      schoolPeriodId: "sp20192020t2",
      gradeLevelName: "Nursery 1",
      gradeLevelCode: "n1",
      costOfTuition: 200,
      costOfBooksAndStationery: 50,
      costOfMiscItems: 20,
      totalTuition: 270,
      createdAt: "",
      createdBy: "",
      timestamp: "",
    },
    n2: {
      id: 1,
      schoolPeriodId: "sp20192020t2",
      gradeLevelName: "Nursery 2",
      gradeLevelCode: "n2",
      costOfTuition: 200,
      costOfBooksAndStationery: 50,
      costOfMiscItems: 20,
      totalTuition: 270,
      createdAt: "",
      createdBy: "",
      timestamp: "",
    },
    kg1: {
      id: 2,
      schoolPeriodId: "sp20192020t2",
      gradeLevelName: "Kindergarten 1",
      gradeLevelCode: "kg1",
      costOfTuition: 250,
      costOfBooksAndStationery: 50,
      costOfMiscItems: 20,
      totalTuition: 320,
      createdAt: "",
      createdBy: "",
      timestamp: "",
    },
    kg2: {
      id: 3,
      schoolPeriodId: "sp20192020t2",
      gradeLevelName: "Kindergarten 2",
      gradeLevelCode: "kg2",
      costOfTuition: 250,
      costOfBooksAndStationery: 50,
      costOfMiscItems: 20,
      totalTuition: 320,
      createdAt: "",
      createdBy: "",
      timestamp: "",
    },
    p1: {
      id: 4,
      schoolPeriodId: "sp20192020t2",
      gradeLevelName: "Primary 1",
      gradeLevelCode: "p1",
      costOfTuition: 250,
      costOfBooksAndStationery: 50,
      costOfMiscItems: 20,
      totalTuition: 320,
      createdAt: "",
      createdBy: "",
      timestamp: "",
    },
    p2: {
      id: 5,
      schoolPeriodId: "sp20192020t2",
      gradeLevelName: "Primary 2",
      gradeLevelCode: "p2",
      costOfTuition: 250,
      costOfBooksAndStationery: 50,
      costOfMiscItems: 20,
      totalTuition: 320,
      createdAt: "",
      createdBy: "",
      timestamp: "",
    },
    p3: {
      id: 6,
      schoolPeriodId: "sp20192020t2",
      gradeLevelName: "Primary 3",
      gradeLevelCode: "p3",
      costOfTuition: 250,
      costOfBooksAndStationery: 50,
      costOfMiscItems: 20,
      totalTuition: 320,
      createdAt: "",
      createdBy: "",
      timestamp: "",
    },
  },
};

const tuitionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TuitionActionTypes.PAY_STUDENT_TUITION:
      return {
        ...state,
        tuitionPaymentRecords: [ action.payload, ...state.tuitionPaymentRecords],
      };

    case TuitionActionTypes.ADD_TUITION:
      return addTuitionForGrade(action.payload, state.tuitionListByGradeLevel)

    default:
      return state;
  }
};

export default tuitionReducer;
