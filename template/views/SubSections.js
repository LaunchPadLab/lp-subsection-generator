import React /*, { useEffect } */ from 'react'
// import PropTypes from 'prop-types'
// import * as Types from 'types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
// import { Spinner } from 'lp-components'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
// import * as apiActions from 'api-actions'

const propTypes = {
  // %subSections%: PropTypes.arrayOf(Types.%subSection%),
  // fetch%SubSections%: PropTypes.func.isRequired,
}

const defaultProps = {}

function %SubSections% (
  // { 
  //   %subSections%, 
  //   fetch%SubSections%,
  // }
) {
  // useEffect(() => { fetch%SubSections%() }, [])
  // if (!%subSections%) return <Spinner />
  return (
    <div> This is the %SubSection% index view! </div>
  )
}

%SubSections%.propTypes = propTypes

%SubSections%.defaultProps = defaultProps

function mapStateToProps (/* state */) {
  return {
    // %subSections%: selectors.%subSections%(state),
  }
}

const mapDispatchToProps = {
  // fetch%SubSections%: apiActions.fetch%SubSections%,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(%SubSections%)
