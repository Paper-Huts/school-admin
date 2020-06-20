import { TuitionActionTypes } from "./TuitionTypes";

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
      receiptNumber: "",
    },
  ],
  tuitionByGrade: {
    n1: {
      id: 0,
      schoolPeriodId: "sp20192020t2",
      name: "Nursery 1",
      grade: "n1",
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
      name: "Nursery 2",
      grade: "n2",
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
      name: "Kindergarten 1",
      grade: "kg1",
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
      name: "Kindergarten 2",
      grade: "kg2",
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
      name: "Primary 1",
      grade: "p1",
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
      name: "Primary 2",
      grade: "p2",
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
      name: "Primary 3",
      grade: "p3",
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
        tuitionPaymentRecords: [...state.tuitionPaymentRecords, action.payload],
      };

    default:
      return state;
  }
};

export default tuitionReducer;
