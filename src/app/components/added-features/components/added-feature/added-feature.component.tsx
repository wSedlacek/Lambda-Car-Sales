import React from 'react';
import { useDispatch } from 'react-redux';

import { AdditionalFeature } from '../../../../models/Car';
import { removeFeature } from '../../../../state/app.actions';

type AddedFeatureProps = {
  feature: AdditionalFeature;
};

const AddedFeatureComponent = (props: AddedFeatureProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    removeFeature(props.feature)(dispatch);
  };

  return (
    <li>
      <button className='button' onClick={handleClick}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export { AddedFeatureComponent };
