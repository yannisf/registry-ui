import angular from 'angular';

angular.module('overview', ['ngResource', 'ngCookies', 'ui.router', 'ui.bootstrap', 'uuid4', 'schoolControl', 'child'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state({
            name: 'overview',
            url: '/overview',
            component: 'overview'
        });
    }])
    .directive('focusAndSelect', [
        function () {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    element.on('click dblclick', function ($event) {
                        if ($event.target.nodeName !== 'INPUT') {
                            element.find('input')[0].select();
                        }
                    });
                }
            };
        }
    ])
    .controller('OverviewCtrl', OverviewCtrl)
    .component('overview', {
        templateUrl: 'app/overview/overview.tpl.html',
        controller: 'OverviewCtrl'
    })
    .factory('Department', ['$resource',
        function ($resource) {
            return $resource('api/overview/department/:id', {
                id: '@id'
            }, {
                query: {
                    method: 'GET',
                    url: 'api/overview/department',
                    isArray: true
                },
                save: {
                    method: 'PUT',
                    params: {
                        id: null
                    }
                },
            });
        }
    ])
    .factory('Group', ['$resource',
        function ($resource) {
            return $resource('api/overview/group/:id', {
                id: '@id'
            }, {
                query: {
                    method: 'GET',
                    url: 'api/overview/group',
                    isArray: true
                },
                save: {
                    method: 'PUT',
                    params: {
                        id: null
                    }
                },
                children: {
                    method: 'GET',
                    url: 'api/overview/group/:id/child',
                    isArray: true
                },
                statistics: {
                    method: 'GET',
                    url: 'api/overview/group/:id/statistics'
                },
            });
        }
    ])
    .factory('School', ['$resource',
        function ($resource) {
            return $resource('api/overview/school/:id', {
                id: '@id'
            }, {
                save: {
                    method: 'PUT',
                    params: {
                        id: null
                    }
                },
            });
        }
    ]);
