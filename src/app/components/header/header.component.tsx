import React from 'react';
import { useSelector } from 'react-redux';

import { Car } from '../../models/Car';
import { State } from '../../state/app.reducer';

const HeaderComponent = () => {
  const car = useSelector<State, Car>((state) => state.car.car);

  return (
    <>
      <figure className='image is-128x128'>
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

export { HeaderComponent };
