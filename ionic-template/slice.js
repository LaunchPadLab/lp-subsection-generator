import { createSlice } from '@reduxjs/toolkit'
// import { selectorForSlice } from 'lp-redux-utils'
// import * as apiActions from 'api-actions'
// import { handleSuccess } from 'lp-redux-api'

export const name = '%subsection%'
const initialState = {}

const slice = createSlice({
  name,
  initialState,
  reducers: {
    // clear%SubSection% (state) {
    //   state.%subSection% = null
    // }
  },
  extraReducers: (/* builder */) => {
    // builder.addCase(
    //   apiActions.fetch%SubSections%,
    //   handleSuccess((state, action) => {
    //     state.%subSections% = action.payload.data
    //   })
    // )
    // builder.addCase(
    //   apiActions.fetch%SubSection%,
    //   handleSuccess((state, action) => {
    //     state.%subSection% = action.payload.data
    //   })
    // )
  },
})

// const select = selectorForSlice(`root.${name}`)
export const selectors = {
  // %subSections%: select('%subSections%'),
  // %subSection%: select('%subSection%'),
}
// export const { clear%SubSection% } = slice.actions
export default slice.reducer