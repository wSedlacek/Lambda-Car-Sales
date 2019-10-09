import React from 'react';
import { useDispatch } from 'react-redux';

import { AdditionalFeature } from '../../../../models/Car';
import { addFeature } from '../../../../state/app.actions';

type AdditionalFeatureProps = {
  feature: AdditionalFeature;
};

const AdditionalFeatureComponent = (props: AdditionalFeatureProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    addFeature(props.feature)(dispatch);
  };

  return (
    <li>
      <button className='button' onClick={handleClick}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export { AdditionalFeatureComponent };
