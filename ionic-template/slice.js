import { createSlice } from '@reduxjs/toolkit'
// import { selectorForSlice } from 'lp-redux-utils'
// import * as apiActions from 'api-actions'
// import { handleSuccess } from 'lp-redux-api'

const initialState = {}

export const name = '%subsection%'
// const slicePath = `root.%subsection%`

const slice = createSlice({
  name,
  initialState,
  reducers: {
    // clear%SubSection% () {
    //   state.%subSection% = null
    // }
  },
  extraReducers: (/* builder */) => {
    // builder.addCase(
    //   apiActions.fetch%SubSections%.toString(),
    //   handleSuccess((state, action) => {
    //     state.%subSections% = action.payload.data
    //   })
    // )
    // builder.addCase(
    //   apiActions.fetch%SubSection%.toString(),
    //   handleSuccess((state, action) => {
    //     state.%subSection% = action.payload.data
    //   })
    // )
  },
})

// const select = selectorForSlice(slicePath)
export const selectors = {
  // %subSections%: select('%subSections%'),
  // %subSection%: select('%subSection%'),
}
// export const { clear%SubSection% } = slice.actions
export default slice.reducer