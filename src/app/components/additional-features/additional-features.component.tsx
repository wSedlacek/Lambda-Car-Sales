import React from 'react';
import { useSelector } from 'react-redux';

import { AdditionalFeature } from '../../models/Car';
import { State } from '../../state/app.reducer';
import { AdditionalFeatureComponent } from './components/additional-feature/additional-feature.component';

const AdditionalFeaturesComponent = () => {
  const store = useSelector<State, AdditionalFeature[]>((state) => state.car.additionalFeatures);

  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type='1'>
          {store.map((item) => (
            <AdditionalFeatureComponent key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export { AdditionalFeaturesComponent };
