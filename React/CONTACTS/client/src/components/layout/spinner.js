import React, { Fragment } from 'react';
import spinnergif from './spinner.gif';

const spinner = () => (
  <Fragment>
    <img
      src={spinnergif}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);

export default spinner;
