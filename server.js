const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const authRoute = require('./routes/authRoute');
const sensorRoute = require('./routes/sensorRoute');
const simulasiRoute = require('./routes/simulasiRoute');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());

// const Sensor = require('./models').Sensor;
// app.post('/api/sensordata', (req, res) => {
//   const kelembapan = req.body;
//   console.log("Sensor data from ESP8266:", kelembapan);
//   res.sendStatus(200); 
// });

app.use('/api',authRoute);
app.use('/api',sensorRoute);
app.use('/api',simulasiRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log((new Date()) + ' Server is listening on port ' + PORT);
});

// const http = require('http');
// const WebSocket = require('websocket');
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