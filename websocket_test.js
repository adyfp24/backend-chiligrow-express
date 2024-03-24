const WebSocket = require('ws');

// Ganti URL WebSocket dengan URL server Anda
const ws = new WebSocket('ws://localhost:4000');

ws.on('open', function open() {
  console.log('WebSocket client connected');
  console.log('WebSocket up');
});

ws.on('message', function incoming(data) {
  console.log('Received message from server:', data);
});

ws.on('close', function close() {
  console.log('WebSocket client disconnected');
});
