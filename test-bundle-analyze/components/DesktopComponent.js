import React from 'react';
import { Lodash } from '../components/Lodash';

const DesktopComponent = ({ name }) => {
  return (
    <p>
      <Lodash />
      {name}
    </p>
  );
};

export default DesktopComponent;
