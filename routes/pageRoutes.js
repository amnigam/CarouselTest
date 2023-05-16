const express = require('express'); 
const router = express.Router(); 
const formController = require('./../controller/formController'); 
const testFormController = require('./../controller/testFormController'); 

router.get('/dealinfo', (req, res) => {
    res.render('dealinfo'); 
});

router
    .route('/formdata')
    .get( (req,res) => {
        res.redirect('/dealinfo');
    })
    .post(  formController.renderForm,
            formController.buildDeal
        );

router
    .route('/testformdata')
    .post(testFormController.buildData, 
        testFormController.renderData
        );

module.exports = router; 