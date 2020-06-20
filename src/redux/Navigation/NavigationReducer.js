const INITIAL_STATE = {
  navBrand: { id: 0, title: 'School Admin', path: '/'},
  navItems: [
    { id: 1, title: 'Admissions', path: '/admissions'},
    { id: 2, title: 'Tuition', path: '/tuition'},
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