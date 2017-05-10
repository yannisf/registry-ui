angular.module('overview', ['ngResource', 'ngCookies', 'ui.router', 'ui.bootstrap', 'uuid4', 'schoolControl', 'child'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state({
            name: 'overview',
            url: '/overview',
            component: 'overview'
        });
    }]);
