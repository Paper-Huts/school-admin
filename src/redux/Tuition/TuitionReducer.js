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
  tuitionByGradeLevel: {
    n1sp20192020t2: {
      id: "n1sp20192020t2",
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
    n2sp20192020t2: {
      id: "n2sp20192020t2",
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
    kg1sp20192020t2: {
      id: "kg1sp20192020t2",
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
    kg2sp20192020t2: {
      id: "kg2sp20192020t2",
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
    p1sp20192020t2: {
      id: "p1sp20192020t2",
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
    p2sp20192020t2: {
      id: "p2sp20192020t2",
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
    p3sp20192020t2: {
      id: "p3sp20192020t2",
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
    p2sp20192020t3: {
      id: "p2sp20192020t3",
      schoolPeriodId: "sp20192020t3",
      gradeLevelName: "Primary 2",
      gradeLevelCode: "p2",
      costOfTuition: 350,
      costOfBooksAndStationery: 50,
      costOfMiscItems: 20,
      totalTuition: 420,
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
      return addTuitionForGrade(action.payload, state.tuitionByGradeLevel)

    default:
      return state;
  }
};

export default tuitionReducer;
