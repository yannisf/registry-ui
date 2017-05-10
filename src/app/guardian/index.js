angular.module('guardian', ['ui.bootstrap', 'ui.router', 'uuid4', 'relationship'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'createGuardian',
                url: '/guardian/create',
                component: 'createGuardian'
            })
            .state({
                name: 'updateGuardian',
                url: '/guardian/:guardianId/edit',
                component: 'updateGuardian'
            })
            .state({
                name: 'viewGuardian',
                url: '/guardian/:guardianId/view',
                component: 'viewGuardian'
            })
    }]);
