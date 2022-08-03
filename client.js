const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.2.53',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connected to server");

  conn.on('data', data => {
      console.log(data);
    });

  })

  return conn;
};

module.exports = { connect };