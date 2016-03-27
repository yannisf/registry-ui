angular.module('overview').directive('groupStatistics', ['ActiveCache', 'Group',

    function (ActiveCache, Group) {
        return {
            restrict: 'E',
            replace: true,
            scope: {groupId: '='},
            templateUrl: "app/overview/statistics/statistics.tpl.html",
            bindToController: true,
            controllerAs: 'ctrl',
            controller: ['$scope', function() {
                this.statistics = Group.statistics({id: this.groupId});
            }]
        };
    }
]);
