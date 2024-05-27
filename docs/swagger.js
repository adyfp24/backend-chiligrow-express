const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
  info: {
    title: 'Chili-grow API',
    description: 'REST API for chili-grow project'
  },
  host: 'localhost:4000' //'chiligrow-api.up.railway.app'
};

const outputFile = './swagger-output.json';
const routes = ['../server.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);