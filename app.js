const express = require('express'); 
const path = require('path');
const AppError = require('./utils/appError');
const errHandler = require('./controller/errorController'); 
const pageRouter = require('./routes/pageRoutes'); 

const app = express();
app.set('view engine', 'pug'); 
app.use(express.urlencoded( { extended: true } ) ); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req,res) => {
    res.render('index', { name: "Chappandi"}); 
}); 

app.get('/dealinfo', pageRouter); 
app.get('/formdata', pageRouter); 
app.post('/formdata', pageRouter); 
app.get('/testformdata', pageRouter); 
app.post('/testformdata',pageRouter); 

app.all('*', (req,res,next) => {
    next(new AppError('No such route exists',404));     // Passing Error inside NEXT. Call to our custom Error class constructor.
})

app.use(errHandler); 

module.exports = app;
