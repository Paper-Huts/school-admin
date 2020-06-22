import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './User/UserReducer'
import navigationReducer from './Navigation/NavigationReducer'
import tuitionReducer from './Tuition/TuitionReducer'
import schoolPeriodReducer from './SchoolPeriod/SchoolPeriodReducer'
import schoolStatsReducer from './SchoolStats/SchoolStatsReducer'
import studentsReducer from './Students/StudentsReducer'
import staffReducer from './Staff/StaffReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['schoolStats', 'tuition', 'students']
}

const rootReducer = combineReducers({
  user: userReducer,
  navigation: navigationReducer,
  tuition: tuitionReducer,
  schoolPeriod: schoolPeriodReducer,
  schoolStats: schoolStatsReducer,
  students: studentsReducer,
  staff: staffReducer
})

export default persistReducer(persistConfig, rootReducer)