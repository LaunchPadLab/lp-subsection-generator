import React /*, { useEffect } */ from 'react'
// import PropTypes from 'prop-types'
// import * as Types from 'types'
// import { useDispatch, useSelector } from 'react-redux'
// import { Spinner } from 'lp-components'
// import { selectors } from '../slice'
// import * as apiActions from 'api-actions'

const propTypes = {}
const defaultProps = {}

function %SubSections% () {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //  dispatch(apiActions.fetch%SubSections%())
  // }, [dispatch])
  //
  // if (!%subSections%) return <Spinner />
  //
  return (
    <div> This is the %SubSection% index view! </div>
  )
}

%SubSections%.propTypes = propTypes
%SubSections%.defaultProps = defaultProps

export default %SubSections%