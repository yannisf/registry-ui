angular.module('overview', ['ngResource', 'ngCookies', 'ui.router', 'ui.bootstrap', 'uuid4', 'schoolControl'])
    .config(['$stateProvider', function ($stateProvider) {
        console.log('route init')
        $stateProvider.state({
            name: 'overview',
            url: '/overview',
            component: 'overview'
        });
    }]);
