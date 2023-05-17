const express = require('express'); 
const router = express.Router(); 
const formController = require('./../controller/formController'); 
const testFormController = require('./../controller/testFormController'); 

let customAlphabet
(async () => {
    customAlphabet = (await import('nanoid')).customAlphabet;
    console.log('NODEID imported!');
})();

router.get('/dealinfo', (req, res) => {
    const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890-', 15); 
    const sbdId = nanoid();
    console.log(sbdId); 
    res.render('dealinfo', { sbdid: sbdId}); 
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