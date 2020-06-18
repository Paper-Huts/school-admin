const INITIAL_STATE = {
  staff: {
    first: { id: 1, name: 'Kweku Boampong', start_date: '12/2/2018' },
    second: { id: 2, name: 'Janet Antwi', start_date: '12/2/2018' },
    third: { id: 3, name: 'Samuel Adorkor', start_date: '12/2/2008' },
    fourth: { id: 4, name: 'Dan Dandin', start_date: '12/4/2010' },
  }
}

const StaffReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

export default StaffReducer