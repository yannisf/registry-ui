import angular from 'angular';
import values from './values';
import filters from './services/filters';
import address from './address';
import overview from './overview';
import navbar from './navbar';
import logout from './logout';
import ngResource from 'angular-resource';
import uiRouter from '@uirouter/angularjs';
import uiBootstrap from 'angular-ui-bootstrap';
import ActiveCacheSvc from './services/active.cache.service';
import ListSvc from './services/list.service';
import TypeaheadSvc from './services/typeahead.service';
import '../styles/main.scss';

angular.module('schoolApp', [ngResource, uiBootstrap, uiRouter, values, filters, address, overview, navbar, logout])
    .config(['$httpProvider', '$urlRouterProvider',
        function ($httpProvider, $urlRouterProvider) {

            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
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
    .run(['$rootScope', '$http', '$location', '$window',
        function ($rootScope, $http, $location, $window) {
            $rootScope.applicationUrl = $window.location.href.substring(0, $window.location.href.indexOf('#'));
            $http.get('api/context/authentication').then((response) => {
                $rootScope.credentials = {
                    username: response.data.name,
                    authorities: response.data.authorities
                };
            });

        }
    ])
    .service('ActiveCache', ActiveCacheSvc)
    .service('ListSvc', ListSvc)
    .service('TypeaheadSvc', TypeaheadSvc)
    .service('AddressService', [function() {

        this.isBlank = function (address) {
            return !(address && (
                address.streetName ||
                address.streetNumber ||
                address.neighbourhood ||
                address.postalCode ||
                address.city));
        };

    }])
    .directive('focus', [
        function focus() {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    element[0].focus();
                }
            };
        }
    ])
    .component('telephone', {
        bindings: {
            telephone: '=model'
        },
        template: '{{$ctrl.telephone.number | telephoneNumber}} <span class="phone-type">{{$ctrl.telephone.type|telephoneTypeFilter}}</span>'
    });
