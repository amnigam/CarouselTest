const x = require('./../utils/formData'); 
const d = require('./../utils/data'); 

const page = x.data;    // Data from the questions
let dealData = {};

module.exports.renderForm = (req,res,next) => {
    dealData = req.body; 
    console.log(dealData); 
    res.render('form', {
        obj: page
    }); 
    next();
}

module.exports.buildDeal = (req, res, next) => {
    console.log("Inside buildDeal!"); 
    d.dataObj = req.body;    
}

// app.get('/formdata', (req, res) => {
//     // res.send(x); 
//     const page = x.data     // x.data is the array of Objects. 
//     res.render('form', {
//             // questions: page[0].question,
//             obj: page

//         });
// })