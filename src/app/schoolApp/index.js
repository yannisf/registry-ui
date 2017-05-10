angular.module('schoolApp', ['ngResource', 'ui.bootstrap', 'values', 'overview'])

    .config(['$httpProvider', '$urlRouterProvider',
        function ($httpProvider, $urlRouterProvider) {

            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
            $httpProvider.interceptors.push(['$window', '$rootScope', '$q', ($window, $rootScope, $q)  => {
                return {
                    responseError: (response) => {
                        if(response.status === 401) {
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
    .service('typeAheadService', TypeaheadSvc); //TODO: Rename
