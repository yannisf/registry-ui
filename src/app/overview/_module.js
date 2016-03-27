angular.module('overview', ['ngRoute', 'ngResource', 'ngCookies', 'ui.bootstrap', 'uuid4'])

    .config(['$routeProvider',

        function ($routeProvider) {
            $routeProvider.when('/overview', {
                templateUrl: 'app/overview/overview.tpl.html',
                controller: 'overviewController'
            });
        }
    ]);
