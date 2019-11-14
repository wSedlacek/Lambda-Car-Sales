import React from 'react';
import { useSelector } from 'react-redux';

import { Car } from '../../models/Car';
import { State } from '../../state/app.reducer';

const TotalComponent = () => {
  const additionalPrice = useSelector<State, number>((state) => state.car.additionalPrice);
  const car = useSelector<State, Car>((state) => state.car.car);

  return (
    <div className='content'>
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export { TotalComponent };
