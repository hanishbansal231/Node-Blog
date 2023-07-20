const express = require('express');
const dbConnection = require('./config/database');
const dotEnv = require('dotenv');
const app = express();
dotEnv.config();
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Start the server ${PORT}`);
})
dbConnection();