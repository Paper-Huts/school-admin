import * as reducers from './reducers'

import { createStore, combineReducers } from 'redux'

let store = createStore(combineReducers(reducers))

