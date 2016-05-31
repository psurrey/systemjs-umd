var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('./');

builder.config({
  defaultJSExtensions: true,
  map: {
    'fbjs': 'node_modules/fbjs',
    'react': 'node_modules/react',
    'react-dom': 'node_modules/react-dom/',
    'react-data-grid': 'node_modules/react-data-grid/dist/'
  },
  packages: {
    'react': { main: 'react' },
    'react-dom': { main: 'index' },
    'react-data-grid': { main: 'react-data-grid' },
  }
});

builder
.bundle('index.js', 'dist/index.js')
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});