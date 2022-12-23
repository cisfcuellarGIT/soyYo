const { appConfig } = require('./config');
const cors = require('cors');
const express = require('express');
const app = express();

// setting
app.set('host', appConfig.host);
app.set('port', process.env.PORT || appConfig.port);

// list routes
app.use('/api/entities', EntityRoutes);

// routes api
const EntityRoutes = require('./routes/EntityRouter');

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

module.exports = app