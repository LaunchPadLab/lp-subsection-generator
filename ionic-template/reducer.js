import { handleActions } from 'redux-actions'
// import { selectorForSlice, unsetState } from 'lp-redux-utils'
// import { setOnSuccess } from 'lp-redux-api'
// import * as actions from './actions'
// import * as apiActions from 'api-actions'

const reducerKey = '%subSection%'
// const slice = 'root.%subSection%'
const initialState = {}
const reducer = handleActions({
  // [apiActions.fetch%SubSections%]: setOnSuccess('%subSections%'),
  // [apiActions.fetch%SubSection%]: setOnSuccess('%subSection%'),
  // [actions.clear%SubSection%]: unsetState('%subSection%'),
}, initialState)
// const select = selectorForSlice(slice)
const selectors = {
  // %subSections%: select('%subSections%'),
  // %subSection%: select('%subSection%'),
}

export { reducer, selectors, reducerKey }
