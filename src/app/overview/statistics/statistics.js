angular.module('overview').component('groupStatistics', {
    bindings: {
        groupId: '<'
    },
    templateUrl: "app/overview/statistics/statistics.tpl.html",
    controller: ['ActiveCache', 'Group', function (ActiveCache, Group) {
        this.$onInit = function () {
            this.statistics = Group.statistics({
                id: this.groupId
            });
        };
    }]
});
