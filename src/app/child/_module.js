angular.module('child', ['ngResource', 'ui.router', 'ui.bootstrap', 'uuid4', 'relationship'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'group',
                url: '/group/:groupId',
                templateUrl: 'app/child/listGroup.tpl.html',
                controller: 'listGroupController'
            })
            .state({
                name: 'createChild',
                url: '/child/create',
                templateUrl: 'app/child/editChild.tpl.html',
                controller: 'createChildController'
            })
            .state({
                name: 'updateChild',
                url: '/child/:childId/update',
                templateUrl: 'app/child/editChild.tpl.html',
                controller: 'updateChildController'
            })
            .state({
                name: 'viewChild',
                url: '/child/:childId/view',
                templateUrl: 'app/child/viewChild.tpl.html',
                controller: 'updateChildController'
            });
    }]);
