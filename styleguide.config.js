/* eslint global-require: "off" */
module.exports = {
  components: 'src/lib/*.vue',
  webpackConfig: require('./build/webpack.prod.conf.js'),
  showUsage: true,
  showCode: true,
  mixins: ['./config/styleguidemixins.js'],
};
