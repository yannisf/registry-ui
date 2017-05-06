angular.module('overview').directive('groupStatistics', ['ActiveCache', 'Group',

    function (ActiveCache, Group) {
        return {
            restrict: 'E',
            replace: true,
            scope: {groupId: '='},
            templateUrl: "app/overview/statistics/statistics.tpl.html",
            controller: ['$scope', function($scope) {
                $scope.statistics = Group.statistics({id: $scope.groupId});
            }]
        };
    }
]);
