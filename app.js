const express = require('express'); 
const path = require('path');
const x = require('./utils/formData'); 
const AppError = require('./utils/appError');
const errHandler = require('./controller/errorController'); 

const app = express();
app.set('view engine', 'pug'); 
app.use(express.urlencoded( { extended: true } ) ); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req,res) => {
    res.render('index', { name: "Chappandi"}); 
}); 

console.log(x.data[0].activities); 
// console.log(x);

app.get('/formdata', (req, res) => {
    // res.send(x); 
    const page = x.data     // x.data is the array of Objects. 
    res.render('form', {
            // questions: page[0].question,
            obj: page

        });
})

app.get('/dealinfo', (req, res) => {
    // res.send(x); 
    const page = x.data     // x.data is the array of Objects. 
    res.render('dealinfo', {
            // questions: page[0].question,
            obj: page

        });
})

app.all('*', (req,res,next) => {
    next(new AppError('No such route exists',404));     // Passing Error inside NEXT. Call to our custom Error class constructor.
})

app.use(errHandler); 

module.exports = app;
