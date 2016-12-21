import { handleActions } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const initialState = {
  appTitle: 'Angular Redux Boilerplate',
  pageTitle: 'Home',
  navMenuItems: [
    { title: 'Home', icon: 'home', state: 'home' },
    { title: 'About', icon: 'info', state: 'about' }
  ],
  backButton: { active: false }
}

const appLayout = handleActions({
  [types.SET_PAGE_TITLE]: (state, action) => ({ ...state, pageTitle: action.payload }),
  [types.TOGGLE_BACK_BUTTON]: (state, action) => ({ ...state, backButton: { active: !state.backButton.active } })
}, initialState)

export default appLayout
