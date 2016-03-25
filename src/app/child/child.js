

angular.module('child', ['ngRoute', 'ngResource', 'ui.bootstrap', 'uuid4', 'relationship'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/group/:groupId', {
                templateUrl: 'app/child/list.tpl.html',
                controller: 'listGroupController'
            })
            .when('/child/create', {
                templateUrl: 'app/child/edit.tpl.html',
                controller: 'createChildController'
            })
            .when('/child/:childId/update', {
                templateUrl: 'app/child/edit.tpl.html',
                controller: 'updateChildController'
            })
            .when('/child/:childId/view', {
                templateUrl: 'app/child/view.tpl.html',
                controller: 'updateChildController'
            });
    }])

    .factory('Child', ['$resource', function($resource) {
        return $resource('api/child/:id', {id: '@id' }, {
            save: {method: 'PUT', params: {id: null} },
        });
    }

]);