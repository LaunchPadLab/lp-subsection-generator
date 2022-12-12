import React /*, { useEffect } */ from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { Spinner } from 'lp-components'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
// import * as apiActions from 'api-actions'
// import * as Types from 'types'

const propTypes = {
  // %subSection%: Types.%SubSection%,
  // fetch%SubSection%: PropTypes.func.isRequired,
  // clear%SubSection%: PropTypes.func.isRequired,
}
const defaultProps = {}

function %SubSection%Show (
  // {
  //   %subSection%,
  //   fetch%SubSection%,
  //   clear%SubSection%,
  // }
) {
  const { id } = useParams()
  //
  // useEffect(() => {
  //  fetch%SubSection%(id)
  //  // Cleanup
  //  return () => clear%SubSection%()
  // }, [ id ])
  //
  // if (!%subSection%) return <Spinner />
  //
  return (
    <div> This is the %SubSection% show view! </div>
  )
}

%SubSection%Show.propTypes = propTypes
%SubSection%Show.defaultProps = defaultProps

function mapStateToProps (/* state */) {
  return {
    // %subSection%: selectors.%subSection%(state)
  }
}

const mapDispatchToProps = {
  // fetch%SubSection%: apiActions.fetch%SubSection%,
  // clear%SubSection%: actions.clear%SubSection%
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(%SubSection%Show)
