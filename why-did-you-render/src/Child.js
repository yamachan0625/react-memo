import React from 'react';

export const Child = React.memo(() => {
  console.log('render Child');

  return <div>CHild Component</div>;
});
