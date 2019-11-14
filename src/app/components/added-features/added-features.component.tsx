import React from 'react';
import { useSelector } from 'react-redux';

import { Car } from '../../models/Car';
import { State } from '../../state/app.reducer';
import { AddedFeatureComponent } from './components/added-feature/added-feature.component';

const AddedFeaturesComponent = () => {
  const car = useSelector<State, Car>((state) => state.car.car);

  return (
    <div className='content'>
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type='1'>
          {car.features.map((item) => (
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
