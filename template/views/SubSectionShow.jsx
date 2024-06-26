// import { useEffect } from 'react'
// import PropTypes from 'prop-types'
// import * as Types from 'types'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { Spinner } from 'lp-components'
// import { clear%SubSection%, selectors } from '../slice'
// import * as apiActions from 'api-actions'

const propTypes = {}
const defaultProps = {}

function %SubSection%Show () {
  // const { id } = useParams()
  // const %subSection% = useSelector(selectors.%subSection%)
  // const dispatch = useDispatch()
  //
  // useEffect(() => {
  //  dispatch(apiActions.fetch%SubSection%(id))
  //  // Cleanup
  //  return () => dispatch(clear%SubSection%())
  // }, [dispatch, id])
  //
  // if (!%subSection%) return <Spinner />
  //
  return (
    <div> This is the %SubSection% show view! </div>
  )
}

%SubSection%Show.propTypes = propTypes
%SubSection%Show.defaultProps = defaultProps

export default %SubSection%Show