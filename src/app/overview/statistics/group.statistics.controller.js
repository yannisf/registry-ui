export default function GroupStatisticsCtrl (ActiveCache, Group) {

        this.$onInit = function () {
            this.statistics = Group.statistics({
                id: ActiveCache.group.id
            });
        };
}

GroupStatisticsCtrl.$inject = ['ActiveCache', 'Group'];
