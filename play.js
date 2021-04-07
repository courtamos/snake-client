const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on('data', (data) => { // event handlers to handle income data and console.log it for the player
    console.log('Server says: ', data);
  });

  conn.setEncoding('utf8'); // interpret incoming data as text

  return conn;
};

console.log('Connecting ...');
connect();