import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './User/UserReducer'
import navigationReducer from './Navigation/NavigationReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['navigation']
}

const rootReducer = combineReducers({
  user: userReducer,
  navigation: navigationReducer
})

export default persistReducer(persistConfig, rootReducer)