const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    IP,
    PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connected to server");
  conn.write("Name: LOL")

  setInterval( func = () => {
      conn.write("Move: up");
    }, 500);

  conn.on('data', data => {
      console.log(data);
    });

  })

  return conn;
};

module.exports = { connect };