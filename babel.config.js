module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-optional-chaining',
    '@babel/plugin-transform-nullish-coalescing-operator',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-private-methods'
  ]
};