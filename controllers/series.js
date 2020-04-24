const Series = require('../models/series');

const labels = {
    'to-watch': 'Para Assistir',
    'watching': 'Assistindo',
    'watched': 'Assistido'
}

const index = async (req, res) => {
    const series = await Series.find({});
    for(let serie of series){
        for(let status in labels){
            if(serie.status === status){
                serie.status = labels[status];
                break;
            }
        }
    }
    res.render('series', { series });
}

const deleteSerie = async (req, res) => {
    const { id } = req.params;
    await Series.deleteOne({ _id: id });
    res.redirect('/series');
}

const createSerie = async (req, res) => {
    const resp = await Series.create(req.body);
    const series = await Series.find({});
    for(let serie of series){
        for(let status in labels){
            if(serie.status === status){
                serie.status = labels[status];
                break;
            }
        }
    }
    res.render('series', { series });
}

const createNewForm = (req, res) => {
    const serie = {
        name: '',
        status: ''
    }
    res.render('form', { action: 'create', serie, labels });
}

const createUpdateForm = async (req, res) => {
    const serie = await Series.findById(req.params.id);
    res.render('form', { serie, labels, action: 'update' });
}

const updateSerie = async (req, res) => {
    const { id, name, status } = req.body;
    const resp = await Series.updateOne( { _id: id }, { name: name, status: status });
    res.redirect('/series');
}

module.exports = {
    index,
    deleteSerie,
    createNewForm,
    createSerie,
    createUpdateForm,
    updateSerie
}