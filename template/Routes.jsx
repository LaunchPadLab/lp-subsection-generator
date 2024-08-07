// import PropTypes from 'prop-types'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import %SubSections% from './views/%SubSections%.jsx'
import %SubSection%Show from './views/%SubSection%Show.jsx'
import Layout from './Layout.jsx'

const propTypes = {}

function Routes () {
  const { path } = useRouteMatch()

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
          <%SubSections% />
        </Route>
        <Route path={`${path}/:id`}>
          <%SubSection%Show />
        </Route>
      </Switch>
    </Layout>
  )
}

Routes.propTypes = propTypes

export default Routes
