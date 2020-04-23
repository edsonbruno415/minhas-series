const express = require('express');
const router = express.Router();
const series = require('../controllers/series');

router.get('/', series.index );
router.get('/excluir/:id', series.deleteSerie);
router.get('/nova-serie', series.createNewForm);
router.post('/novo-registro', series.createSerie);
router.get('/editar/:id', series.createUpdateForm);
router.post('/editar-registro', series.updateSerie);

module.exports = router;