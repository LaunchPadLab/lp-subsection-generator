import { handleActions } from 'redux-actions'
// import { selectorForSlice } from 'lp-redux-utils'

const reducerKey = '%sub-section%'
// const slice = 'root.%sub-section%'

const initialState = {}

const reducer = handleActions({}, initialState)

// const select = selectorForSlice(slice)

const selectors = {}

export { reducer, selectors, reducerKey }
