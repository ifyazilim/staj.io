'use strict';

var express = require('express');
var router = express.Router();
var Company = require('../model/company');
var NodeCache = require("node-cache");
var libs = process.cwd() + '/libs/';
var db = require(libs + 'db/mongoose');
var log = require(libs + 'log')(module);

var myCache = new NodeCache();

Company.find(function (err, results) {

    if (err) {
        log.error('Error  getting all company list' + err);
        return res.json({
            message: err
        });
    }
    myCache.set('companyList', results, function (err, success) {
        if (!err && success) {

            log.info(success);
        }
    });
});

router.get('/company', function (req, res) {
    myCache.get("companyList", function (err, results) {

        if (!err) {

            return res.json(results);
        }
    });
});


router.get('/company2', function (req, res) {

    res.json('data');
});



router.get('/sectorAndCity/:sector/:city', function (req, res) {

    var sector = req.params.sector;
    var city = req.params.city;

    Company.find({'sector': sector, 'city': city}, function (err, results) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(results);
        }

    });
});


router.get('/companies', function (req, res) {
    var perPage = 5
        , page = req.param('page') > 0 ? req.param('page') : 0;
    Company
        .find()
        .limit(perPage)
        .skip(perPage * page)
        .exec(function (err, result) {
            Company.count().exec(function (err, count) {
                if (err) {
                    return res.json({message: 'Hata Meydana Geldi.'});
                } else {
                    res.json('company', {
                        company: result
                        , page: page
                        , pages: count / perPage
                    });
                }

            })
        })
});


router.get('/cityList', function (req, res) {

    Company.count().find().select('city').exec(function (err, results) {

        if (err) {
            return res.json(er);
        }
        else {
            return res.json(results);
        }

    });

});

router.get('/sector/:sector', function (req, res) {

    var sector = req.query.sector;

    Company.find({'sector': sector}, function (err, results) {

        if (err) {
            log.error('error getSector' + err);
            return res.json(err);
        }
        return res.json(results);
    });
});

router.get('/city/:city', function (req, res) {

    var city = req.query.city;

    Company.find({'city': city}, function (err, results) {

        if (err) {
            log.error('error getSector' + err);
            return res.json(err);
        }
        return res.json(results);
    });
});

module.exports = router;
