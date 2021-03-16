import React from 'react';

export const StyleProp2 = React.memo(({ style }) => {
  console.log('render StyleProp2');
  return <div style={style}>こんちゃ</div>;
});
