// import PropTypes from 'prop-types'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import %SubSections% from './views/%SubSections%.jsx'
import %SubSection%Show from './views/%SubSection%Show.jsx'
import Layout from './Layout.jsx'

const propTypes = {}
const defaultProps = {}

function Routes () {
  const { path } = useRouteMatch()

  return (
    <Layout>
      <Switch>
        <Route exact path={path}>
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
