import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './User/UserReducer'
import navigationReducer from './Navigation/NavigationReducer'
import schoolStatsReducer from './SchoolStats/SchoolStatsReducer'
import studentsReducer from './Students/StudentsReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['navigation', 'schoolStats']
}

const rootReducer = combineReducers({
  user: userReducer,
  navigation: navigationReducer,
  schoolStats: schoolStatsReducer,
  students: studentsReducer
})

export default persistReducer(persistConfig, rootReducer)