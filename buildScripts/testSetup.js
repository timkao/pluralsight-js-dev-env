// This file isn't transpiled, so must use CommonJs and ES5
// because we tell mocha to run this file first, before running other files


// Register babel to transplie before our tests run.
// we use some ES6 codes in the file and mocha does not read those ES6 code. Therefore, we need to use babel to transpile it.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function(){};
