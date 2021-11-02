import React from 'react'
import PropTypes from 'prop-types'
import { IonContent, IonPage } from '@ionic/react'
import { Header } from 'components'

const propTypes = {
  children: PropTypes.node.isRequired,
}
const defaultProps = {}

// This default layout can be tailored for each page. For example, if a back button is
// needed in the header for this page, add the "withBackButton" prop to the <Header>
// component along with any button styling options.
function Layout({ children }) {
  return (
    <IonPage>
      <Header />
      <IonContent>{children}</IonContent>
    </IonPage>
  )
}

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
