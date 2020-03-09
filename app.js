const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');

app.use('/feed',feedRoutes);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.listen(3000);