import { takeEvery } from 'redux-saga'
import { fork, put, select } from 'redux-saga/effects'
import { stateGo } from 'redux-ui-router'
import * as types from '../constants/actionTypes'

export function * clickMenuItem (action) {
  const menuItem = action.payload
  yield put(stateGo(menuItem.state))
}

export function * clickBackButton (action) {
  const state = yield select()
  const prevStateName = state.router.prevState.name || 'home'
  yield put(stateGo(prevStateName))
}

export function * backToHome (action) {
  yield put(stateGo('home'))
}

function * watchClickMenuItem () {
  yield * takeEvery(types.CLICK_MENU_ITEM, clickMenuItem)
}

function * watchClickBackButton () {
  yield * takeEvery(types.CLICK_BACK_BUTTON, clickBackButton)
}

function * watchBackToHome () {
  yield * takeEvery(types.BACK_TO_HOME, backToHome)
}

export default function * () {
  yield [
    fork(watchClickMenuItem),
    fork(watchClickBackButton),
    fork(watchBackToHome)
  ]
}
