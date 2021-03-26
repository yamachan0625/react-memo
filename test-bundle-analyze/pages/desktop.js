import React from 'react';
import Import from '../components/Import';
// import dynamic from 'next/dynamic';

// import DesktopComponent from '../components/DesktopComponent';
// import MobileComponent from '../components/MoblieComponent';

export const desktop = () => {
  const [isDesktop, setIsDesktop] = React.useState(true);
  const page = (
    <Import
      isDesktop={isDesktop}
      mobile={() => import('../components/MoblieComponent')}
      desktop={() => import('../components/DesktopComponent')}
    >
      {(Product) => <Product />}
    </Import>
  );

  return (
    <div>
      {/* {isDesktop ? <DesktopComponent /> : <MobileComponent />} */}
      {/* <DesktopComponent /> */}
      {/* <MobileComponent /> */}
      {page}
      <button onClick={() => setIsDesktop((prev) => !prev)}>button</button>
    </div>
  );
};

export default desktop;
