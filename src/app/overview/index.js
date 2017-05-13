import angular from 'angular';
import ngResource from 'angular-resource';
import ngCookies from 'angular-cookies';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import breadcrumb from './breadcrumb';
import OverviewCtrl from './overview.controller';
import template from './overview.tpl.html';
import groupStatistics from './grouStatistics';
import schools from './schools';
import departments from './departments';
import groups from './groups';
import 'angular-uuid4';

export default angular.module('overview', [
        ngResource,
        ngCookies,
        uiRouter,
        uiBootstrap,
        'uuid4',
        // 'child',
        schools,
        departments,
        groups,
        breadcrumb,
        groupStatistics
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state({
            name: 'overview',
            url: '/overview',
            component: 'overview'
        });
    }])
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
    ])
    .controller('OverviewCtrl', OverviewCtrl)
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
    .component('overview', {
        template: template,
        controller: 'OverviewCtrl'
    })
    .name;
