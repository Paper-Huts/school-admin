import { TuitionActionTypes } from './TuitionTypes'
import TUITION_DATA from './TuitionData'

const INITIAL_STATE = TUITION_DATA

const tuitionReducer = (state = INITIAL_STATE, action) => {
  switch (TuitionActionTypes) {
    case TuitionActionTypes.PAY_STUDENT_TUITION:
      return {
        ...state,
        tuitionPaymentHistory: [
          ...state.tuitionPaymentHistory,
          action.payload
        ]
      }

    default:
      return state
  }
}

export default tuitionReducer;