const express = require('express');
const cors= require('cors');
const app = express();
const PORT = 4000;
const pengepulRoute = require('./routes/pengepulRoute');
const authRoute = require('./routes/authRoute');

app.use(cors());
app.use(express.json());

app.use('/api/v1/', authRoute);
app.use('/api/v1/', pengepulRoute);

app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`);
}); 