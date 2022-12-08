import React /*, { useEffect } */ from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react'
// import { LoadingModal } from 'components'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
// import * as apiActions from 'api-actions'
// import * as Types from 'types'

const propTypes = {
  // %subSection%: Types.%SubSection%,
  // fetch%SubSection%: PropTypes.func.isRequired,
  // clear%SubSection%: PropTypes.func.isRequired,
}
const defaultProps = {}

function %SubSection%Show (
  // {
  //   %subSection%,
  //   fetch%SubSection%,
  //   clear%SubSection%,
  // }
) {
  const { id } = useParams()
  //
  // useEffect(() => {
  //  fetch%SubSection%(id)
  //  // Cleanup
  //  return () => clear%SubSection%()
  // }, [ id ])
  //
  // if (!%subSection%) return <LoadingModal />
  //
  return (
    <IonList>
      <IonListHeader>%SubSections% Show View</IonListHeader>
      <IonItem>
        <IonLabel className="ion-text-wrap">
          <p>
            This is the %SubSections% show view for id: [{id}].
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

function mapStateToProps (/* state */) {
  return {
    // %subSection%: selectors.%subSection%(state)
  }
}

const mapDispatchToProps = {
  // fetch%SubSection%: apiActions.fetch%SubSection%,
  // clear%SubSection%: actions.clear%SubSection%
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(%SubSection%Show)
