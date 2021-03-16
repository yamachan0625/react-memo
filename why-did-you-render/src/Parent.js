import React from 'react';

export const Parent = React.memo(({ children }) => {
  console.log('render Parent');
  return <div>{children}</div>;
});
