import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { IonRouterOutlet } from '@ionic/react'
import * as Views from './views'
import Layout from './Layout'

const propTypes = {}
const defaultProps = {}

function Routes () {
  const { path } = useRouteMatch()

  return (
    <Layout>
      <IonRouterOutlet>
        <Route exact path={path}>
          <Views.%SubSections% />
        </Route>
        <Route path={`${path}/:id`}>
          <Views.%SubSection%Show />
        </Route>
      </IonRouterOutlet>
    </Layout>
  )
}

Routes.propTypes = propTypes
Routes.defaultProps = defaultProps

export default Routes
