angular.module('schoolApp').directive('navbar', ['$location', '$cookieStore', 'ActiveCache',

    function ($location, $cookieStore, ActiveCache) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: "app/schoolApp/navbar/navbar.tpl.html",
            controller: ['$scope', function($scope) {
                $scope.active = ActiveCache;
                
                $scope.toOverview = function() {
                    ActiveCache.clearChild();
                    $cookieStore.remove('group');
                    $location.url('/overview');
                };
                
                $scope.toGroup = function() {
                    $location.url('/group/' + ActiveCache.group.id);
                };
            }]
        };
    }
]);
