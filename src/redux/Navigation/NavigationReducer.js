const INITIAL_STATE = {
  navBrand: { id: 0, title: 'School Admin', path: '/'},
  navItems: [
    { id: 1, title: 'Student Applications', path: '/admissions'},
    { id: 2, title: 'School Fees', path: '/tuition'},
    { id: 3, title: 'Staff', path: '/staff'}
  ]
}

const navigationReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

export default navigationReducer