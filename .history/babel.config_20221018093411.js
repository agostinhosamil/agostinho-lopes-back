const { _moduleAliases } = require('./package.json')
 
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'es5'
        }
      }
    ],
    '@babel/preset-es2017'
  ],

  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: _moduleAliases
      }
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ],

  ignore: [
    '**/*.spec.js'
  ]
}
