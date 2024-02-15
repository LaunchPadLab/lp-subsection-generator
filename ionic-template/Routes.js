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
    <IonRouterOutlet>
      <Route exact path={path}>
        <Layout>
          <Views.%SubSections% />
        </Layout>
      </Route>
      <Route path={`${path}/:id`}>
        <Layout>
          <Views.%SubSection%Show />
        </Layout>
      </Route>
    </IonRouterOutlet>
  )
}

Routes.propTypes = propTypes
Routes.defaultProps = defaultProps

export default Routes
