const express = require('express');
const router = express.Router();
const series = require('./series');

router.get('/', (req, res) => res.render('index'));

router.get('/sobre', (req, res) => res.render('sobre'));

router.use('/series', series);

module.exports = router;
