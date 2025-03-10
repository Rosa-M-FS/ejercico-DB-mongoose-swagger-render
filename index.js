const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');

const mongoose = require("mongoose");
/* const { MONGO_URI } = require("./config/keys"); */
require('dotenv').config();  
const MONGO_URI = process.env.MONGO_URI;

const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index');

app.use(express.json());

app.use('/', routes);


dbConnection();
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));