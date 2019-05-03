import React from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
// import { onMount, waitFor } from 'lp-hoc'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
// import * as apiActions from 'api-actions'
// import * as Types from 'types'

const propTypes = {
  // %subSections%: PropTypes.arrayOf(Types.%subSection%).isRequired,
}

const defaultProps = {}

function %SubSections% () {
  return (
    <div> This is the %SubSection% index view! </div>
  )
}

%SubSections%.propTypes = propTypes

%SubSections%.defaultProps = defaultProps

function mapStateToProps () {
  return {
    // %subSections%: selectors.%subSections%(state)
  }
}

const mapDispatchToProps = {
  // fetch%SubSections%: apiActions.fetch%SubSections%,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // onMount('fetch%SubSections%'),
  // waitFor('%subSection%'),
)(%SubSections%)
