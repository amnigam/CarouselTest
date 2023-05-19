const express = require('express'); 
const path = require('path');
const fs = require('fs')
const AppError = require('./utils/appError');
const errHandler = require('./controller/errorController'); 
const pageRouter = require('./routes/pageRoutes'); 

const app = express();
app.set('view engine', 'pug'); 
app.use(express.urlencoded( { extended: true } ) ); 
app.use(express.static(path.join(__dirname, 'public'))); 

let landingPageData = [];
try {
    landingPageData = fs.readFileSync(`${__dirname}/utils/landingPage.txt`, { encoding: 'utf-8' } );
} catch (err) {
    throw new AppError('Could not read system file for the landing page', 500);
}; 
// console.log(JSON.parse(landingPageData)); 

app.get('/', (req,res) => {
    res.render('index', { landingPage: JSON.parse(landingPageData)}); 
}); 

app.get('/dealinfo', pageRouter); 
app.get('/formdata', pageRouter); 
app.post('/formdata', pageRouter); 
app.get('/testformdata', pageRouter); 
app.post('/testformdata',pageRouter); 
app.get('/reference', (req,res) => {
    res.render('reference', { landingPage: JSON.parse(landingPageData)}); 
});
app.get('/analytics', (req, res) => {
    res.send("Page under construction!");
});
/*app.get('/reference', ( req, res ) => {
    res.send('Page under Construction!'); 
});*/

app.all('*', (req,res,next) => {
    next(new AppError('No such route exists',404));     // Passing Error inside NEXT. Call to our custom Error class constructor.
})

app.use(errHandler); 

module.exports = app;
