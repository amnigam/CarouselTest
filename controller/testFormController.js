const d = require('./../utils/data');
const domains = require('./formController').domains; 

let finalObj = {};
let domainScopeResp = [];
let domainTransformResp = []; 

module.exports.buildData = (req, res, next) => {
    finalObj = {};
    console.log(req.body); 
    console.log('Here is shared Data\n', d.dataObj)
    console.log("Domains: ", domains); 

    parseFormResp (req.body, domains); 
    const dealParsed = parseDealData (d.dataObj);

    finalObj = {
        dealData: dealParsed,
        responseData: {
            domains,
            domainScopeResp,
            domainTransformResp
        }
    }
    // finalObj = JSON.stringify(d.dataObj) + JSON.stringify(req.body);
    next();
}

let domainInScope;
module.exports.renderData = (req, res, next) => {
    // res.json(JSON.stringify(finalObj) );
    // res.json(finalObj); 
    domainInScope = [];
    finalObj.responseData.domainScopeResp.forEach( (e) => {
        if (e[1] === "yes") {
            domainInScope.push(e[0]);
        };
    });
    console.log("In scope domains: ", domainInScope); 
    console.log('From Req Body', finalObj.responseData.domainScopeResp);

    res.render('testformdata', {
        deal: finalObj.dealData,
        scope: domainInScope
    })
}

function parseFormResp (reqObj, domains) {
    const respEntries = Object.entries(reqObj);   // Gives the array of entries [key,value] for the Request Object. 
    // Re-initialize our arrays back to blank. This prevents appending of in scope domains when user re-enters. 
    domainScopeResp = [];
    domainTransformResp = []; 
    domains.forEach( (el) => {
        respEntries.forEach( (e) => {
            // Extract last element to know whether it is 0 or 1. 
            if (e[0].slice(0,-1) === el) {
                // If 0 then, push the response captured to Scope Array
                if (e[0].slice(-1) === '0') {
                    domainScopeResp.push([el,e[1]]);
                } else if (e[0].slice(-1) === '1') {    // If 1 then push response to transform array
                    domainTransformResp.push([el,e[1]]); 
                }
            }
        })
    })
};

function parseDealData (dealObj) {
    const tempObj = {...dealObj};   // Use spread operator to create a shallow copy of the object. 
    delete tempObj.submit;          // Remove the SUBMIT attribute from the object. 
    return tempObj;
}