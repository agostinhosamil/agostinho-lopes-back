const { compilerOptions: { paths } } = require('./tsconfig.json')

const pathAliases = {}

Object.keys(paths).forEach(pathAlias => {
  pathAliases[pathAlias.replace(/\/\*$/, '')] = String(
    paths[pathAlias][0].replace(/\/\*$/, '')
  )
})

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],

  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: pathAliases
      }
    ]
  ],

  ignore: [
    '**/*.spec.js'
  ]
}
