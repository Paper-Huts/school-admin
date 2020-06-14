const INITIAL_STATE = {
  summaryStats: [
    {id: '0', title: 'Current Number of Students', value: 118},
    {id: '1', title: 'Average Number of Students per Class', value: 16},
    {id: '2', title: 'Total Amount of School Fees Owed (GHC)', value: 7000},
    {id: '3', title: 'Number of Students in Arrears', value: 30}
  ]
}

const schoolStatsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

export default schoolStatsReducer