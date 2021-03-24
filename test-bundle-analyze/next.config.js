const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});

module.exports = withBundleAnalyzer({
  // 他の設定
});

const ROOT_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://awseb-awseb-t7h2otj93b0q-2085495435.ap-northeast-1.elb.amazonaws.com'
    : 'http://localhost:4000';
