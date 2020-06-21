import { schoolStats } from './SchoolStatsData'

const INITIAL_STATE = {
  summaryStats: schoolStats['summaryStats'],
  admissionStats: schoolStats['admissionStats']
}

const schoolStatsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

export default schoolStatsReducer