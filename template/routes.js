import React from 'react'
import { Route, IndexRoute } from 'react-router'
import * as Views from './views'

const Routes = (
  <Route path="%sub-section%" component={ Layout }>
    <IndexRoute component={ Views.%SubSection% }/>
  </Route>
)

export default Routes
