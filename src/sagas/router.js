import { takeEvery } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as types from '../constants/actionTypes'

export function * setPageTitle (action) {
  const state = {
    'home': () => actions.setPageTitle('Home'),
    'about': () => actions.setPageTitle('About')
  }
  yield put(state[action.payload.toState.name]())
}

function * watchStageChangeSuccess (state) {
  yield * takeEvery(types.STATE_CHANGE_SUCCESS, setPageTitle)
}

export default function * () {
  yield [
    fork(watchStageChangeSuccess)
  ]
}
