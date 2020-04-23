const express = require('express');
const router = express.Router();
const series = require('../controllers/series');

router.get('/', series.index );

module.exports = router;