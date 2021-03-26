import React, { useEffect, useState } from 'react';

const Import = ({ isDesktop, mobile, desktop, children }) => {
  const [Component, setComponent] = useState(null);
  const importCallback = isDesktop ? desktop : mobile;

  const set = () => {
    if (importCallback) {
      importCallback().then((componentDetails) => {
        setComponent(componentDetails);
      });
    }
  };
  set();
  // useEffect(() => {
  //   if (importCallback) {
  //     importCallback().then((componentDetails) => {
  //       setComponent(componentDetails);
  //     });
  //   }
  // }, [isDesktop]);

  return children(Component ? Component.default : () => null);
};

export default Import;
