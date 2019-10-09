import React from 'react';

import { Car } from '../../models/Car';
import { AddedFeatureComponent } from './components/added-feature/added-feature.component';

type AddedFeaturesProps = {
  car: Car;
};

const AddedFeaturesComponent = (props: AddedFeaturesProps) => {
  return (
    <div className='content'>
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type='1'>
          {props.car.features.map((item) => (
            <AddedFeatureComponent key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export { AddedFeaturesComponent };
