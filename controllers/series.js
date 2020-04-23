const Series = require('../models/series');

const labels = {
    'to-watch': 'Para Assistir',
    'watching': 'Assistindo',
    'watched': 'Assistido'
}

const index = (req, res) => {
    Series.find({}, (err, series) => {
        if (err) {
            console.error(err);
        } else {
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
    });
}

const deleteSerie = (req, res) => {
    const { id } = req.params;
    Series.deleteOne({ _id: id }, (err) => {
        if (err) {
            console.error(err);
        }
    });
    res.redirect('/series');
}

const createSerie = (req, res) => {

    Series.create(req.body, err => {
        if (err) {
            console.log(error);
        }
        Series.find({}, (err, series) => {
            for(let serie of series){
                for(let status in labels){
                    if(serie.status === status){
                        serie.status = labels[status];
                        break;
                    }
                }
            }
            res.render('series', { series });
        });
    });
}

const createNewForm = (req, res) => {
    const serie = {
        name: '',
        status: ''
    }
    res.render('form', { action: 'create', serie, labels });
}

const createUpdateForm = (req, res) => {
    Series.findById(req.params.id, (err, serie) => {
        if (err) {
            console.log(err);
        } else {
            res.render('form', { serie, labels, action: 'update' });
        }
    });
}

const updateSerie = (req, res) => {
    const { id, name, status } = req.body;
    Series.updateOne({ _id: id },
        { name: name, status: status },
        (err, result) => {
            if (err) {
                console.error(err);
            } else {
                res.redirect('/series');
            }
        });
}

module.exports = {
    index,
    deleteSerie,
    createNewForm,
    createSerie,
    createUpdateForm,
    updateSerie
}