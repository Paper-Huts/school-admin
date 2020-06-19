const INITIAL_STATE = {
  currentSchoolPeriod: {
    academicYear: "2019/2020",
    academicTerm: 2,
    date: new Date().toDateString(),
    schoolPeriodId: "sp20192020t2",
  },
  schoolPeriods: [
    {
      academicYear: "2019/2020",
      academicTerm: 1,
      schoolPeriodId: "sp20192020t1",
    },
    {
      academicYear: "2019/2020",
      academicTerm: 2,
      schoolPeriodId: "sp20192020t2",
    },
    {
      academicYear: "2019/2020",
      academicTerm: 3,
      schoolPeriodId: "sp20192020t3",
    },{
      academicYear: "2018/2019",
      academicTerm: 1,
      schoolPeriodId: "sp20182019t1"
    },{
      academicYear: "2018/2019",
      academicTerm: 2,
      schoolPeriodId: "sp20182019t2"
    },{
      academicYear: "2018/2019",
      academicTerm: 3,
      schoolPeriodId: "sp20182019t3"
    },
  ],
};

const schoolPeriodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default schoolPeriodReducer;
