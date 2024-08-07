import PropTypes from 'prop-types'
import { IonContent, IonPage } from '@ionic/react'
import Header from '@/components/Header.jsx'

const propTypes = {
  children: PropTypes.node.isRequired,
}

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

export default Layout
