import React, { useEffect, useState } from 'react';

const Import = ({ isDesktop, mobile, desktop, children }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const importCallback = isDesktop ? desktop : mobile;

    if (importCallback) {
      importCallback().then((componentDetails) => {
        setComponent(componentDetails);
      });
    }
  }, [isDesktop]);

  return children(Component ? Component.default : () => null);
};

export default Import;
