const express = require('express');
const router = express.Router();
const series = require('../controllers/series');

router.get('/', series.index );
router.get('/excluir/:id', series.deleteSerie );

module.exports = router;