import React /*, { useEffect } */ from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
// import { Spinner } from 'lp-components'
// import { connectParams } from 'lp-hoc'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
// import * as apiActions from 'api-actions'
// import * as Types from 'types'

const propTypes = {
  // id: PropTypes.number.isRequired,
  // %subSection%: Types.%subSection%,
  // fetch%SubSection%: PropTypes.func.isRequired,
  // clear%SubSection%: PropTypes.func.isRequired,
}

const defaultProps = {}

function %SubSection%Show (  
  // { 
  //   id,
  //   %subSection%, 
  //   fetch%SubSection%,
  //   clear%SubSection%,
  // }
) {
  // useEffect(() => { 
  //  fetch%SubSection%(id)
  //  // Cleanup
  //  return () => clear%SubSection%()
  // }, [ id ])
  // if (!%subSection%) return <Spinner />
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
  // connectParams('id'),
  connect(mapStateToProps, mapDispatchToProps),
)(%SubSection%Show)
