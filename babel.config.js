module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@components': './src/components',
        '@utils': './src/utils'
      }
    }]
  ]
};
