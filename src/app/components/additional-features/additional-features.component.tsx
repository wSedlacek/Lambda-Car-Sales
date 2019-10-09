import React from 'react';
import { AdditionalFeatureComponent } from './components/additional-feature/additional-feature.component';
import { AdditionalFeature } from '../../models/Car';

type AdditionalFeaturesProps = {
  store: AdditionalFeature[];
};

const AdditionalFeaturesComponent = (props: AdditionalFeaturesProps) => {
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
};

export { AdditionalFeaturesComponent };
