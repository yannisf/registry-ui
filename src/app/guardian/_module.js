angular.module('guardian', ['ui.bootstrap', 'ui.router', 'uuid4', 'child', 'relationship'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'createGuardian',
                url: '/guardian/create',
                templateUrl: 'app/guardian/editGuardian.tpl.html',
                controller: 'createGuardianController'
            })
            .state({
                name: 'editGuardian',
                url: '/guardian/:guardianId/edit',
                templateUrl: 'app/guardian/editGuardian.tpl.html',
                controller: 'updateGuardianController'
            })
            .state({
                name: 'viewGuardian',
                url: '/guardian/:guardianId/view',
                templateUrl: 'app/guardian/viewGuardian.tpl.html',
                controller: 'updateGuardianController'
            })
    }]);
