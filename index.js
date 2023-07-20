const express = require('express');
const blogRouter = require('./router/blogRouter');
const dbConnection = require('./config/database');
const dotEnv = require('dotenv');
const app = express();
dotEnv.config();
app.use(express.json());
app.use("/api/v1",blogRouter);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Start the server ${PORT}`);
})
dbConnection();