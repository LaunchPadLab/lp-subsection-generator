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
  // thing: Types.thing.isRequired
}

const defaultProps = {}

function %SubSection% () {
  return (
    <div> This is the %SubSection% view! </div>
  )
}

%SubSection%.propTypes = propTypes

%SubSection%.defaultProps = defaultProps

function mapStateToProps () {
  return {
    // thing: selectors.thing(state)
  }
}

const mapDispatchToProps = {
  // fetchThing: apiActions.fetchThing,
  // setThing: actions.setThing
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // onMount('fetchThing'),
  // waitFor('thing'),
)(%SubSection%)
