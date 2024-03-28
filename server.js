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

const sensorController = require('./controllers/sensorController');

wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection request from origin ' + request.origin);

    if (!originIsAllowed(request.origin)) {
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    const connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');

    connection.on('message', sensorController.sensorHandler);

    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log((new Date()) + ' Server is listening on port ' + PORT);
});