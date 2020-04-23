const Series = require('../models/series');

const index = (req, res) => {
    Series.find({},(err, series )=>{
        if(err){
            console.error(err);
        }else{
            res.render('series', { series });
        }
    });
}

const deleteSerie = (req, res) => {
    const { id } = req.params;
    Series.deleteOne({ _id : id },(err)=>{
        if(err){
            console.error(err);
        }
    });
    res.redirect('/series');
}

const createSerie = (req, res) => {

    Series.create(req.body, err => {
        if(err){
            console.log(error);
        }
        Series.find({}, (err, series) => {
            res.render('series', { series });
        });
    });
}

const createNewForm = (req, res) => {
    res.render('form');
}

const createUpdateForm = (req, res) => {
    const labels = {
        'to-watch' : 'Para Assistir',
        'watching' : 'Assistindo',
        'watched' : 'Assistido'
    }
    Series.findById(req.params.id, (err, serie)=>{
        if(err){
            console.log(err);
        }else{
            res.render('form', { serie , labels });
        }
    });
}

module.exports = {
    index,
    deleteSerie,
    createNewForm,
    createSerie,
    createUpdateForm
}