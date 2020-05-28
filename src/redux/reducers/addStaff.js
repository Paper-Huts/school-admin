import { ADD_STAFF } from "../actionTypes"

const addStaff = (state=[], action) => {
  switch(action.type) {
    case ADD_STAFF:
      return Object.assign({}, state, [
        ...state,
        {
          id: action.id,
          first_name: action.first_name,
          last_name: action.last_name,
          start_date: action.start_date,
          title: action.title
        }
      ])
  }
}

export default addStaff

