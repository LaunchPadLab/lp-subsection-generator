import { Route, useRouteMatch } from 'react-router-dom'
import { IonRouterOutlet } from '@ionic/react'
import %SubSections% from './views/%SubSections%.jsx'
import %SubSection%Show from './views/%SubSection%Show.jsx'
import Layout from './Layout.jsx'

const propTypes = {}

function Routes () {
  const { path } = useRouteMatch()

  return (
    <Layout>
      <IonRouterOutlet>
        <Route exact path={path}>
          <%SubSections% />
        </Route>
        <Route path={`${path}/:id`}>
          <%SubSection%Show />
        </Route>
      </IonRouterOutlet>
    </Layout>
  )
}

Routes.propTypes = propTypes

export default Routes
