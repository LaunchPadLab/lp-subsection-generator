// import { useEffect } from 'react'
// import PropTypes from 'prop-types'
// import * as Types from '@/main/types.js'
// import { useDispatch, useSelector } from 'react-redux'
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react'
// import LoadingModal from '@/components/LoadingModal.jsx'
// import { selectors } from '../slice.js'
// import * as apiActions from '@/main/apiActions.js'

const propTypes = {}

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

export default %SubSections%
