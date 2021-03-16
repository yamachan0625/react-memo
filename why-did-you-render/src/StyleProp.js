import React from 'react';

export const StyleProp = React.memo(({ style }) => {
  console.log('render StyleProp');
  return <div style={style}>ちょりっす</div>;
});
