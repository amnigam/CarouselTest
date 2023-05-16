const d = require('./../utils/data');

let finalObj = {};

module.exports.buildData = (req, res, next) => {
    // console.log(req.body); 
    console.log('Here is shared Data\n', d.dataObj)
    finalObj = JSON.stringify(d.dataObj) + JSON.stringify(req.body);
    next();
}

module.exports.renderData = (req, res, next) => {
    res.json( {
        "deal data" : d.dataObj,
        "response data" : JSON.stringify(req.body)
    });
}