import React from 'react';
import { connect } from 'react-redux';

import { Car } from '../../models/Car';
import { CarState } from '../../state/app.reducer';
import { AddedFeatureComponent } from './components/added-feature/added-feature.component';

type AddedFeaturesReduxProps = {
  car: Car;
};

const AddedFeaturesComponent = connect<AddedFeaturesReduxProps, {}, {}, CarState>((state) => ({
  car: state.car.car,
}))((props: AddedFeaturesReduxProps) => {
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
});

export { AddedFeaturesComponent };
