
angular.module('schoolApp')
    .directive('logout', ['$rootScope', '$http', '$window', function ($rootScope, $http, $window) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: "app/components/logout.tpl.html",
            controller: ['$scope', function($scope) {

                $http.get('api/context/authentication').success(function(data) {
                    $scope.user = data.name;
                });

                $scope.logout = function() {
                    delete $http.defaults.headers.common["X-Requested-With"];
                    $http.get('logout').success(
                        function() {
                            $window.location.replace($rootScope.applicationUrl);
                        }
                    );
                };
            }]
        };
    }]);