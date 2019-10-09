import React from 'react';
import { connect } from 'react-redux';

import { AdditionalFeature } from '../../models/Car';
import { CarState } from '../../state/app.reducer';
import { AdditionalFeatureComponent } from './components/additional-feature/additional-feature.component';

type AdditionalFeaturesReduxProps = {
  store: AdditionalFeature[];
};

const AdditionalFeaturesComponent = connect<AdditionalFeaturesReduxProps, {}, {}, CarState>(
  (state) => ({
    store: state.car.additionalFeatures,
  })
)((props: AdditionalFeaturesReduxProps) => {
  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type='1'>
          {props.store.map((item) => (
            <AdditionalFeatureComponent key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
});

export { AdditionalFeaturesComponent };
