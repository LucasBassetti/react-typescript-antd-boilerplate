const path = require('path');
const { addWebpackAlias, override, fixBabelImports, addLessLoader } = require('customize-cra');

// Add just the necessary icons to decrease bundle size
function overrides(config, env) {
  config.resolve.alias['@ant-design/icons/lib/dist$'] = path.join(__dirname, 'src/icons.js')

  return config
}

module.exports = override(
  overrides,
  addWebpackAlias({
    '@assets': path.join(__dirname, 'src/assets'),
    '@constants': path.join(__dirname, 'src/constants'),
    '@components': path.join(__dirname, 'src/shared/components'),
    '@icons': path.join(__dirname, 'src/shared/icons'),
    '@layout': path.join(__dirname, 'src/layout'),
    '@redux': path.join(__dirname, 'src/redux'),
    '@utils': path.join(__dirname, 'src/utils')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    paths: ['./src/styles', './node_modules'],
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#3f51b5',
      '@link-color': '#3f51b5',
      '@success-color': '#52c41a',
      '@warning-color': '#faad14',
      '@error-color': '#f5222d',
      '@font-size-base': '14px',
      '@heading-color': 'rgba(0, 0, 0, .85)',
      '@text-color': 'rgba(0, 0, 0, .65)',
      '@text-color-secondary ': 'rgba(0, 0, 0, .45)',
      '@disabled-color': 'rgba(0, 0, 0, .25)',
      '@border-radius-base': '4px',
      '@border-color-base': '#d9d9d9',
      '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)',
    },
  }),
);