angular.module('schoolApp').directive('logout', ['$rootScope', '$http', '$window',
    function ($rootScope, $http, $window) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: "app/schoolApp/logout/logout.tpl.html",
            controller: ['$scope', function($scope) {

                $http.get('api/context/authentication').then(function(data) {
                    $scope.user = data.name;
                });

                $scope.logout = function() {
                    delete $http.defaults.headers.common["X-Requested-With"];
                    $http.get('logout').then(
                        function() {
                            $window.location.replace($rootScope.applicationUrl);
                        }
                    );
                };
            }]
        };
    }
]);
