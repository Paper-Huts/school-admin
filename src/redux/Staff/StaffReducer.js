import { Staff } from './StaffData'
import { StaffTypes } from './StaffTypes'

const INITIAL_STATE = {
  occupationList: Staff.occupationList,
  staffList: Staff.staffList
}

const staffReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case StaffTypes.ADD_STAFF:
      return {
        ...state.staffList,
        staffList: action.payload
      }
    default:
      return state
  }
}

export default staffReducer