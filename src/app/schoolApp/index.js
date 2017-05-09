angular.module('schoolApp', ['ngResource', 'ui.bootstrap', 'ui.mask', 'uuid4', 'values', 'child', 'guardian', 'overview'])

    .config(['$httpProvider',
        function ($httpProvider) {
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
            $httpProvider.interceptors.push(['$window', '$rootScope', '$q', function ($window, $rootScope, $q) {
                return {
                    responseError: function (response) {
                        if(response.status === 401) {
                            $window.location.replace($rootScope.applicationUrl);
                        }
                        return $q.reject(response);
                    }
                };
            }]);
        }
    ]);
