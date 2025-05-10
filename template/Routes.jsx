// import PropTypes from 'prop-types'
import { Navigate, Route, Routes } from 'react-router-dom'

import %SubSections% from './views/%SubSections%.jsx'
import %SubSection%Show from './views/%SubSection%Show.jsx'

import Layout from './Layout.jsx'

const propTypes = {}

function %SubSection%Routes () {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<%SubSections% />} />
        <Route path="/:id" element={<%SubSection%Show />} />
        <Route path="*" element={<Navigate to=".." replace />} />
      </Route>
    </Routes>
  )
}

%SubSection%Routes.propTypes = propTypes

export default %SubSection%Routes
