import React from 'react';

import { Car } from '../../models/Car';

type TotalProps = {
  additionalPrice: number;
  car: Car;
};

const TotalComponent = (props: TotalProps) => {
  return (
    <div className='content'>
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export { TotalComponent };
