import React from 'react';

export const Tooltip = React.memo(({ tooltip }) => {
  console.log('render Tooltip');
  return <>{tooltip}</>;
});
