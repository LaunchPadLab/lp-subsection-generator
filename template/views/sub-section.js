import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

const propTypes = {}

const defaultProps = {}

function %SubSection% () {
  return (
    <div> This is the %SubSection% view! </div>
  )
}

%SubSection%.propTypes = propTypes

%SubSection%.defaultProps = defaultProps

function mapStateToProps (state) {
  return {}
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(%SubSection%)
