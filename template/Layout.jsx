import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
}

function Layout ({ children }) {
  return (
    <div>
      { children }
    </div>
  )
}

Layout.propTypes = propTypes

export default Layout
