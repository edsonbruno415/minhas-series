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

module.exports = {
    index,
    deleteSerie
}