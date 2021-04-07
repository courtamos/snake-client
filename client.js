const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on('connect', () => { // msg showing connection to server
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => { // sharing name with server
    conn.write('Name: CRT');
  });

  // conn.on('connect', () => { // telling server to move snake
  //   setInterval(() => conn.write('Move: down'), 1000);
  //   // setTimeout(() => conn.write('Move: left'), 2000);
  //   // setTimeout(() => conn.write('Move: up'), 3000);
    
  // });

  conn.on('data', (data) => { // event handlers to handle income data and console.log it for the player
    console.log('Server says: ', data);
  });

  conn.setEncoding('utf8'); // interpret incoming data as text

  return conn;
};

module.exports = { connect };