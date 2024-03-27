const express = require('express');
const http = require('http');
const WebSocket = require('websocket');

const app = express();
const server = http.createServer(app);
const wsServer = new WebSocket.server({
    httpServer: server,
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  return true;
}

wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection request from origin ' + request.origin);

    if (!originIsAllowed(request.origin)) {
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    const connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Data sensor kelembapan tanah: ' + message.utf8Data);
            connection.sendUTF("Hello from Node.js");
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });

    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log((new Date()) + ' Server is listening on port ' + PORT);
});
