const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

const pages = require('./routes/pages');
const mongoose = require('mongoose');
const Serie = require('./models/series');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', pages);

mongoose.connect('mongodb://localhost:27017/minhas-series',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.error(err);
        } else {
            app.listen(port, (err, result) => console.log('Application on running on http://localhost:' + port));
        }
    });