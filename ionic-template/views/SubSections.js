import React /*, { useEffect } */ from 'react'
// import PropTypes from 'prop-types'
// import * as Types from 'types'
import { compose, connect } from 'react-redux'
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react'
// import { LoadingModal } from 'components'
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
  // if (!%subSections%) return <LoadingModal />
  return (
    <IonList>
      <IonListHeader>%SubSections% Index View</IonListHeader>
      <IonItem>
        <IonLabel className="ion-text-wrap">
          <p>
            This is the %SubSections% index view.
          </p>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel className="ion-text-wrap">
          <p>
            For Ionic projects you should favor using Ionic components over raw
            HTML when possible. See the{' '}
            <a href="https://ionicframework.com/docs/components">
              Ionic React Components documentation
            </a>{' '}
            for more information.
          </p>
        </IonLabel>
      </IonItem>
    </IonList>
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
