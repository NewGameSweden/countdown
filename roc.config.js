module.exports = {
  settings: {
    runtime: {
      applicationName: 'Countdown',
      port: 8000,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      reducers: 'src/redux/reducers.js',
      routes: 'src/routes/index.js',
    },
  },
};
