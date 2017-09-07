const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const rootRouter = require('./routes/index');
const activitiesRouter = require('./routes/activities');

mongoose.connect('mongodb://localhost:27017/stat');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', rootRouter);
app.use('/activities', activitiesRouter);

app.listen(3000, function(){
  console.log('Started express application!')
});
