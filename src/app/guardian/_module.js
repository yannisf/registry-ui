angular.module('guardian', ['ngRoute', 'ui.bootstrap', 'uuid4', 'child', 'relationship'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/guardian/create', {
                templateUrl: 'app/guardian/editGuardian.tpl.html',
                controller: 'createGuardianController'
            })
            .when('/guardian/:guardianId/edit', {
                templateUrl: 'app/guardian/editGuardian.tpl.html',
                controller: 'updateGuardianController'
            })
            .when('/guardian/:guardianId/view', {
                templateUrl: 'app/guardian/viewGuardian.tpl.html',
                controller: 'updateGuardianController'
            });
        }
    ]);