import React /*, { useEffect } */ from 'react'
// import PropTypes from 'prop-types'
// import * as Types from 'types'
// import { useDispatch, useSelector } from 'react-redux'
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react'
// import { LoadingModal } from 'components'
// import { selectors } from '../slice'
// import * as apiActions from 'api-actions'

const propTypes = {}
const defaultProps = {}

function %SubSections% () {
  // const %subSections% = useSelector(selectors.%subSections%)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //  dispatch(apiActions.fetch%SubSections%())
  // }, [dispatch])
  //
  // if (!%subSections%) return <LoadingModal />
  //
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

export default %SubSections%
