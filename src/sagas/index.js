import { fork } from 'redux-saga/effects'
import router from './router'
import appLayout from './appLayout'
import counter from './counter'

export default function * rootSaga () {
  yield [
    fork(router),
    fork(appLayout),
    fork(counter)
  ]
}
