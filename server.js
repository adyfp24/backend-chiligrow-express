const express = require('express');
const { route } = require('./routes/pengepulRoute');
const server = express();
const PORT = 4000;
const pengepulRoute = require('./routes/pengepulRoute')

server.use(express.json());
server.use('/api/v1/', pengepulRoute);

server.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`);
});