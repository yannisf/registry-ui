angular.module('child', ['ngResource', 'ui.router', 'ui.bootstrap', 'uuid4', 'relationship'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'group',
                url: '/group/:groupId',
                component: 'groupList'
            })
            .state({
                name: 'createChild',
                url: '/child/create',
                component: 'createChild'
            })
            .state({
                name: 'updateChild',
                url: '/child/:childId/update',
                component: 'updateChild'
            })
            .state({
                name: 'viewChild',
                url: '/child/:childId/view',
                component: 'viewChild'
            });
    }]);
