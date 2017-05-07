angular.module('guardian', ['ui.bootstrap', 'ui.router', 'uuid4', 'child', 'relationship'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'createGuardian',
                url: '/guardian/create',
                component: 'createGuardian'
            })
            .state({
                name: 'editGuardian',
                url: '/guardian/:guardianId/edit',
                component: 'editGuardian'
            })
            .state({
                name: 'viewGuardian',
                url: '/guardian/:guardianId/view',
                component: 'viewGuardian'
            })
    }]);
