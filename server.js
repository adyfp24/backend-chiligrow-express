const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const authRoute = require('./routes/authRoute');
const sensorRoute = require('./routes/sensorRoute');
const simulasiRoute = require('./routes/simulasiRoute');
const profileRoute = require('./routes/profileRoute');
const pemupukanRoute = require('./routes/pemupukanRoute');

global.__basedir = __dirname;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use('/api/v1', authRoute);
app.use('/api/v1', sensorRoute);
app.use('/api/v1', simulasiRoute);
app.use('/api/v1', profileRoute);
app.use('/api/v1', pemupukanRoute);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger-output.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log((new Date()) + ' Server is listening on port ' + PORT);
});

module.exports = app;