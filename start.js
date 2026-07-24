const { spawn } = require("child_process");

console.log("启动 Gateway 和 WakeUp...");

const server = spawn("node", ["server.js"], {
  stdio: "inherit"
});

const wake = spawn("node", ["wake_up.js"], {
  stdio: "inherit"
});

server.on("exit", code => {
  console.log("server.js退出:", code);
});

wake.on("exit", code => {
  console.log("wake_up.js退出:", code);
});