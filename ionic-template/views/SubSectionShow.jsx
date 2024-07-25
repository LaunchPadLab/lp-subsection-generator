// import { useEffect } from 'react'
// import PropTypes from 'prop-types'
// import * as Types from '@/main/types.js'
// import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react'
// import LoadingModal from '@/components/LoadingModal.jsx'
// import { clear%SubSection%, selectors } from '../slice.js'
// import * as apiActions from '@/main/apiActions.js'

const propTypes = {}
const defaultProps = {}

function %SubSection%Show () {
  // const { id } = useParams()
  // const %subSection% = useSelector(selectors.%subSection%)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //  dispatch(apiActions.fetch%SubSection%(id))
  //  // Cleanup
  //  return () => dispatch(clear%SubSection%())
  // }, [dispatch, id])
  //
  // if (!%subSection%) return <LoadingModal />
  //
  return (
    <IonList>
      <IonListHeader>%SubSection% Show View</IonListHeader>
      <IonItem>
        <IonLabel className="ion-text-wrap">
          <p>
            This is the %SubSection% show view for id: [{id}].
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

%SubSection%Show.propTypes = propTypes
%SubSection%Show.defaultProps = defaultProps

export default %SubSection%Show