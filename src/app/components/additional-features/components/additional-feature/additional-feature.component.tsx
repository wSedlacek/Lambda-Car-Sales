import React from 'react';
import { connect } from 'react-redux';

import { AdditionalFeature } from '../../../../models/Car';
import { addFeature, CarActions } from '../../../../state/app.actions';

type AdditionalFeatureProps = {
  feature: AdditionalFeature;
};

const AdditionalFeatureComponent = connect<{}, CarActions, AdditionalFeatureProps, {}>(
  null,
  { addFeature }
)((props: AdditionalFeatureProps & CarActions) => {
  const addFeature = () => {
    if (!props.addFeature) return;
    props.addFeature(props.feature);
  };

  return (
    <li>
      <button className='button' onClick={addFeature}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
});

export { AdditionalFeatureComponent };
