'use strict';

angular
    .module('company.module')
    .config(function config($stateProvider) {
        $stateProvider.state('companydetails', {
            url: '/companydetails',
            views: {
                "main": {
                    controller: 'CompanyDetails',
                    templateUrl: 'app/company/view/company.operation.tpl.html',
                    controllerAs: 'vm',
                    authenticate: true
                }
            },
            data: {
                pageTitle: 'Sirket Ekleme Sayfasi'
            }
        })

    });
