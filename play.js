const { connect } = require('./client');
console.log('Connecting ...');
connect();
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key)); // on data input/key being pushed, call handleUserInput with the key being pushed

  const handleUserInput = function(key) { // once called from stdin.on.. execute this block
    if (key === '\u0003') { // \u0003 maps to ctrl+c input
      console.log('exiting now');
      process.exit();
    }
  };

  return stdin;
};

setupInput(); // calling function