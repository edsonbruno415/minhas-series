const Series = require('../models/series');

const labels = {
    'to-watch': 'Para Assistir',
    'watching': 'Assistindo',
    'watched': 'Assistido'
}

const index = async (req, res) => {
    const series = await Series.find({});
    for (let serie of series) {
        serie.status = labels[serie.status];
    }
    res.render('series', { series });
}

const deleteSerie = async (req, res) => {
    const { id } = req.params;
    await Series.deleteOne({ _id: id });
    res.redirect('/series');
}

const createSerie = async (req, res) => {
    try {
        await Series.create(req.body);
        const series = await Series.find({});
        for (let serie of series) {
            serie.status = labels[serie.status];
        }
        res.render('series', { series });
    } catch (error) {
        error.message = `O campo nome é obrigatório.`
        res.render('createForm', { labels , error });
    }
}

const createNewForm = (req, res) => {
    res.render('createForm', { labels, error : null });
}

const createUpdateForm = async (req, res) => {
    const serie = await Series.findById(req.params.id);
    res.render('updateForm', { serie, labels });
}

const updateSerie = async (req, res) => {
    const { id, name, status } = req.body;
    const resp = await Series.updateOne({ _id: id }, { name: name, status: status });
    res.redirect('/series');
}

const aboutSerie = async (req, res) => {
    const serie = await Series.findById(req.params.id);
    res.render('sobre-serie', { serie });
}

module.exports = {
    index,
    deleteSerie,
    createNewForm,
    createSerie,
    createUpdateForm,
    updateSerie,
    aboutSerie
}