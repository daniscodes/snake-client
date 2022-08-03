const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (input) => {
  const stdout = process.stdout;
  const interval = function (input) {
    func = setInterval(() => {
      connection.write(input);
    }, 100);
  };
  if (input === '\u0003') {
    stdout.write("Exited snek game. Bye bye.\n");
    process.exit();
  }
  if (input === 'w') {
    clearInterval(func);
    interval(UPKEY);
  }
  if (input === 'a') {
    clearInterval(func);
    interval(LEFTKEY);
  }
  if (input === 's') {
    clearInterval(func);
    interval(DOWNKEY);
  }
  if (input === 'd') {
    clearInterval(func);
    interval(RIGHTKEY);
  }
  if (input === "h") {
    connection.write(msg + hello);
  }
  if (input === "j") {
    connection.write(msg + stay);
  }
  if (input === 'k') {
    connection.write(msg + listen);
  }
};

module.exports = { setupInput }