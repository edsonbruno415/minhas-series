const Series = require('../models/series');

const index = (req, res) => {
    Series.find({},(err, series )=>{
        if(err){
            console.error(err);
        }else{
            console.log(series);
            res.render('series', { series });
        }
    });
};

module.exports = {
    index
}