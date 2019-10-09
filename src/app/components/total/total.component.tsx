import React from 'react';
import { connect } from 'react-redux';
import { Car } from '../../models/Car';
import { CarState } from '../../state/app.reducer';

type TotalReduxProps = {
  additionalPrice: number;
  car: Car;
};

const TotalComponent = connect<TotalReduxProps, {}, {}, CarState>((state) => ({
  additionalPrice: state.car.additionalPrice,
  car: state.car.car,
}))((props: TotalReduxProps) => {
  return (
    <div className='content'>
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
});

export { TotalComponent };
