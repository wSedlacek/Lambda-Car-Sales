import React from 'react';

import { Car } from '../../models/Car';

type HeaderProps = {
  car: Car;
};

const HeaderComponent = (props: HeaderProps) => {
  return (
    <>
      <figure className='image is-128x128'>
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export { HeaderComponent };
