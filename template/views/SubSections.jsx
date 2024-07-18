// import { useEffect } from 'react'
// import PropTypes from 'prop-types'
// import * as Types from '@/main/types.js'
// import { useDispatch, useSelector } from 'react-redux'
// import { Spinner } from '@launchpadlab/lp-components'
// import { selectors } from '../slice.js'
// import * as apiActions from '@/main/apiActions.js'

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