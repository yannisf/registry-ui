angular.module('schoolApp').directive('navbar', ['$state', '$cookieStore', 'ActiveCache',

    function ($state, $cookieStore, ActiveCache) {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            templateUrl: "app/schoolApp/navbar/navbar.tpl.html",
            controller: ['$scope', function($scope) {
                $scope.active = ActiveCache;
                
                
                //Deprecated, now using ui-sref
                $scope.toOverview = function() {
                    ActiveCache.clearChild();
                    $cookieStore.remove('group');
                    $state.go('overview');
                };
                
                $scope.toGroup = function() {
                    $state.go('group', {groupId: ActiveCache.group.id});
                };
            }]
        };
    }
]);
