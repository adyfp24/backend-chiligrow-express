const express = require('express');
const http = require('http');
const WebSocket = require('websocket');
const bodyParser = require('body-parser');
const { Sensor } = require('./models');

const app = express();

const authRoute = require('./routes/authRoute');
const sensorRoute = require('./routes/sensorRoute');

app.use(bodyParser.text());

// app.post('/api/sensor-data', (req, res) => {
//   const kelembapan = parseInt(req.body);
//   console.log("Sensor data from ESP8266:", kelembapan);
//   if (!isNaN(kelembapan)) {
//     Sensor.update(
//       { nilai_kelembapan: kelembapan },
//       { where: { id_sensor: 1 } }
//     );
//     res.send('Received and processed sensor data');
//   } else {
//     res.status(400).send('Invalid sensor data');
//   }
// });

app.use('api/v1', authRoute);
app.use('api/v1', sensorRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log((new Date()) + ' Server is listening on port ' + PORT);
});

// const server = http.createServer(app);
// const wsServer = new WebSocket.server({
//     httpServer: server,
//     autoAcceptConnections: false
// });

// function originIsAllowed(origin) {
//   return true;
// }

// const sensorController = require('./controllers/sensorController');

// wsServer.on('request', function(request) {
//     console.log((new Date()) + ' Connection request from origin ' + request.origin);

//     if (!originIsAllowed(request.origin)) {
//       request.reject();
//       console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
//       return;
//     }
    
//     const connection = request.accept(null, request.origin);
//     console.log((new Date()) + ' Connection accepted.');

//     connection.on('message', sensorController.sensorHandler);

//     connection.on('close', function(reasonCode, description) {
//         console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
//     });
// });