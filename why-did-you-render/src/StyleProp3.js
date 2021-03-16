import React from 'react';

export const StyleProp3 = React.memo(({ style }) => {
  console.log('render StyleProp3');
  return <div style={style}>ヤッホー</div>;
});
