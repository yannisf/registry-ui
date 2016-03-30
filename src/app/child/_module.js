angular.module('child', ['ngRoute', 'ngResource', 'ui.bootstrap', 'uuid4', 'relationship'])

    .config(['$routeProvider',

        function ($routeProvider) {
            $routeProvider
                .when('/group/:groupId', {
                    templateUrl: 'app/child/listGroup.tpl.html',
                    controller: 'listGroupController'
                })
                .when('/child/create', {
                    templateUrl: 'app/child/editChild.tpl.html',
                    controller: 'createChildController'
                })
                .when('/child/:childId/update', {
                    templateUrl: 'app/child/editChild.tpl.html',
                    controller: 'updateChildController'
                })
                .when('/child/:childId/view', {
                    templateUrl: 'app/child/viewChild.tpl.html',
                    controller: 'updateChildController'
                });
        }

    ]);