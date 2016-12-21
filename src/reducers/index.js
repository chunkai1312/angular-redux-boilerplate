import { combineReducers } from 'redux'
import { router } from 'redux-ui-router'
import appLayout from './appLayout'
import counter from './counter'

const rootReducer = combineReducers({
  router,
  appLayout,
  counter
})

export default rootReducer
