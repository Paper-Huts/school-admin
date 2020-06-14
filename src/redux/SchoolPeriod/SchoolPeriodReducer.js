
const INITIAL_STATE = {
  currentSchoolPeriod: {
    academicYear: "2019/2020",
    academicTerm: 2,
    date: new Date().toDateString(),
    schoolPeriodId: "sp20192020t2"
  },
  schoolPeriods: []
}

const schoolPeriodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {  
    default:
      return state;
  }
}

export default schoolPeriodReducer;