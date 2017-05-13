import angular from 'angular';
import values from '../values';
import overview from '../overview';
import ngResource from 'angular-resource';
import uiBootstrap from 'ui-bootstrap';
import ActiveCacheSvc from './active.cache.service';
import ListService from './list.service';
import TypeaheadSvc from './typeahead.service';
import filters from './filters';

angular.module('schoolApp', [ngResource, uiBootstrap, values, filters, overview])

    .config(['$httpProvider', '$urlRouterProvider',
        function ($httpProvider, $urlRouterProvider) {

            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
            $httpProvider.interceptors.push(['$window', '$rootScope', '$q', ($window, $rootScope, $q) => {
                return {
                    responseError: (response) => {
                        if (response.status === 401) {
                            $window.location.replace($rootScope.applicationUrl);
                        }
                        return $q.reject(response);
                    }
                };
            }]);

            $urlRouterProvider.otherwise('overview');
        }
    ])
    .service('ActiveCache', ActiveCacheSvc)
    .service('ListService', ListService)
    .service('typeAheadService', TypeaheadSvc) //TODO: Rename
    .factory('Address', ['$resource', function ($resource) {
        return $resource('api/address/:id', {
            id: '@id'
        }, {
            save: {
                method: 'PUT',
                params: {
                    id: null
                }
            },
            getForPerson: {
                method: 'GET',
                url: 'api/address/person/:personId'
            }
        });
    }])
    .service('AddressService', [function () {

        this.isBlank = function (address) {
            return !(address && (
                address.streetName ||
                address.streetNumber ||
                address.neighbourhood ||
                address.postalCode ||
                address.city));
        }

    }])
    .run(['$rootScope', '$http', '$location', '$window', '$state',
        function ($rootScope, $http, $location, $window, $state) {

            $rootScope.applicationUrl = $window.location.toString().substring(0, $window.location.toString().indexOf('#'));

            $http.get('api/context/authentication').then(function (data) {
                $rootScope.credentials = {
                    authenticated: data.name != 'anonymousUser',
                    username: data.name,
                    authorities: data.authorities
                };
            });

        }
    ])
    .component('telephone', {
        bindings: {
            telephone: "=model"
        },
        template: '{{$ctrl.telephone.number}} <span class="phone-type">{{$ctrl.telephone.type|telephoneTypeFilter}}</span>'
    })
    .directive('focus', [
        function focus() {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    element[0].focus();
                }
            };
        }
    ]);
