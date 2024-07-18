import { createSlice } from '@reduxjs/toolkit'
// import { selectorForSlice } from '@launchpadlab/lp-redux-utils'
// import { handleSuccess } from '@launchpadlab/lp-redux-api'
// import * as apiActions from '@/main/apiActions.js'

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