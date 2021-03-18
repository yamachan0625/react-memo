import React from 'react';

export const EmptyArray = React.memo(({ arr }) => {
  console.log('render EmptyArray');
  return <div>arr:{arr}</div>;
});
