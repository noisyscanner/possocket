const socket = new WebSocket("ws://localhost:6969");

const line1 = new Uint8Array([27, 116, 2]);
const line2 = new Uint8Array([
  72,
  101,
  108,
  108,
  111,
  32,
  119,
  111,
  114,
  108,
  100,
]);
const line3 = new Uint8Array([13, 100]);
const line4 = new Uint8Array([27, 100, 6]);
const line5 = new Uint8Array([27, 109]);

socket.onopen = function (e) {
  console.log("[open] Connection established");
  console.log("Sending to server");
  socket.send(line1);
  socket.send(line2);
  socket.send(line3);
  socket.send(line4);
  socket.send(line5);
};

socket.onmessage = function (event) {
  console.log(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(
      `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
    );
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    console.log("[close] Connection died");
  }
};

socket.onerror = function (error) {
  console.log(`[error] ${error.message}`);
};
