import { ADD_STAFF, UPDATE_STAFF } from './actionTypes'

[
  {
    type: ADD_STAFF,
    staff: {
      id: 1,
      first_name: 'Afua',
      last_name: 'Boampong',
      start_date: '12/3/2019',
      title: 'Teacher'
    }
  },
  {
    type: UPDATE_STAFF,
    staff: {
      id: 1,
      title: 'Headmistress'
    }
  }
]
