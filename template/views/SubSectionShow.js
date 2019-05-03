import React from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
// import { onMount, waitFor, connectParams } from 'lp-hoc'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
// import * as apiActions from 'api-actions'
// import * as Types from 'types'

const propTypes = {
  // %subSection%: Types.%subSection%.isRequired
}

const defaultProps = {}

function %SubSection% () {
  return (
    <div> This is the %SubSection% show view! </div>
  )
}

%SubSection%.propTypes = propTypes

%SubSection%.defaultProps = defaultProps

function mapStateToProps () {
  return {
    // %subSection%: selectors.%subSection%(state)
  }
}

const mapDispatchToProps = {
  // fetch%SubSection%: apiActions.fetch%SubSection%,
  // clear%SubSection%: actions.clear%SubSection%
}

// function onComponentDidMount ({ fetch%SubSection%, id }) {
//   return fetch%SubSection%(id),
// }

export default compose(
  // connectParams('id'),
  connect(mapStateToProps, mapDispatchToProps),
  // withProps(modifyProps),
  // onMount(onComponentDidMount),
  // waitFor('%subSection%'),
  // onUnmount('clear%SubSection%'),
)(%SubSection%)
