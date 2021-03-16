import React from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render';
whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: 'green',
  diffNameColor: 'aqua',
  trackAllPureComponents: true,
});
