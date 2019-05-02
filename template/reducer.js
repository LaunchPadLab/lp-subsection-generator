import { handleActions } from 'redux-actions'
// import { selectorForSlice, setState } from 'lp-redux-utils'
// import { setOnSuccess } from 'lp-redux-api'
// import * as actions from './actions'
// import * as apiActions from 'api-actions'

const reducerKey = '%subSection%'
// const slice = 'root.%subSection%'

const initialState = {}

const reducer = handleActions({
  // [apiActions.fetchThing]: setOnSuccess('thing'),
  // [actions.setThing]: setState('thing'),
}, initialState)

// const select = selectorForSlice(slice)

const selectors = {
  // thing: select('thing'),
}

export { reducer, selectors, reducerKey }
