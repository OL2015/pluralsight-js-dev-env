// This file is not transpiles, so must use CommonJS and ES5

// Register babel to transpile before our test run
require('babel-register')();

//Disablewebpack features that Mocha doesn't understand
require.extensions['css'] = function () {};
