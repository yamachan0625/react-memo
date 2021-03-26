import React from 'react';
// import Import from '../components/Import';
import dynamic from 'next/dynamic';

// import DesktopComponent from '../components/DesktopComponent';
// import MobileComponent from '../components/MoblieComponent';

const DesktopComponent = dynamic(
  () => import('../components/DesktopComponent'),
  // サーバ側でレンダリングさせない
  { ssr: false }
);

const MobileComponent = dynamic(() => import('../components/MoblieComponent'));

export const desktop2 = () => {
  const [isDesktop, setIsDesktop] = React.useState(true);

  return (
    <div>
      {isDesktop ? <DesktopComponent name="たかし" /> : <MobileComponent />}
      {/* <DesktopComponent /> */}
      {/* <MobileComponent /> */}
      <button onClick={() => setIsDesktop((prev) => !prev)}>button</button>
    </div>
  );
};

export default desktop2;
