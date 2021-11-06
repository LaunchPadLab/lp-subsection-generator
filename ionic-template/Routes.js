import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import * as Views from './views'
import Layout from './Layout'

const propTypes = {}
const defaultProps = {}

function Routes () {
  const { path } = useRouteMatch()

  return (
    <Layout>
      <Switch>
        <Route exact path={`${path}/`}>
          <Views.%SubSections% />
        </Route>
        <Route path={`${path}/:id`}>
          <Views.%SubSection%Show />
        </Route>
      </Switch>
    </Layout>
  )
}

Routes.propTypes = propTypes
Routes.defaultProps = defaultProps

export default Routes
