/**
 * Created by gokhan on 3/26/15.
 */
var mongoose = require('mongoose');

var Company = require('../models/company');


module.exports = function (app) {
    var company = new Company();

    app.post("/addcompany", function (req, res) {

        company.name = req.body.name;
        company.address = req.body.address;
        company.email = req.body.email;
        company.websiteUrl = req.body.websiteUrl;
        company.city = req.body.city;

        company.save(function (err) {
            if (err)
                res.send(err);

            res.json(company);
        });
    });


    app.get('/getAllCompany', function (req, res) {
        mongoose.model('Company').find(function (err, company) {

            if (err) {
                res.json(err);
            }
            res.send(company);
        });


    });

   
};