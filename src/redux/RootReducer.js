import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './User/UserReducer'
import navigationReducer from './Navigation/NavigationReducer'
import tuitionReducer from './Tuition/TuitionReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['navigation']
}

const rootReducer = combineReducers({
  user: userReducer,
  navigation: navigationReducer,
  tuition: tuitionReducer
})

export default persistReducer(persistConfig, rootReducer)