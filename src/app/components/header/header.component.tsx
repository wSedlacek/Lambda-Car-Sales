import React from 'react';
import { connect } from 'react-redux';

import { Car } from '../../models/Car';
import { CarState } from '../../state/app.reducer';

type HeaderReduxProps = {
  car: Car;
};

const HeaderComponent = connect<HeaderReduxProps, {}, {}, CarState>((state) => ({
  car: state.car.car,
}))((props: HeaderReduxProps) => {
  return (
    <>
      <figure className='image is-128x128'>
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
});

export { HeaderComponent };
