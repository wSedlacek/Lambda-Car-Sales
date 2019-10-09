import React from 'react';
import { connect } from 'react-redux';

import { AdditionalFeature } from '../../../../models/Car';
import { CarActions, removeFeature } from '../../../../state/app.actions';

type AddedFeatureProps = {
  feature: AdditionalFeature;
};

const AddedFeatureComponent = connect<{}, CarActions, AddedFeatureProps, {}>(
  null,
  { removeFeature }
)((props: AddedFeatureProps & CarActions) => {
  const removeFeature = () => {
    if (!props.removeFeature) return;
    props.removeFeature(props.feature.id);
  };

  return (
    <li>
      <button className='button' onClick={removeFeature}>
        X
      </button>
      {props.feature.name}
    </li>
  );
});

export { AddedFeatureComponent };
