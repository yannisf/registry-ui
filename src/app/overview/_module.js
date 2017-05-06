angular.module('overview', ['ngResource', 'ngCookies', 'ui.router', 'ui.bootstrap', 'uuid4'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state({
            name: 'overview',
            url: '/overview',
            templateUrl: 'app/overview/overview.tpl.html',
            controller: 'overviewController'
        });
    }]);
