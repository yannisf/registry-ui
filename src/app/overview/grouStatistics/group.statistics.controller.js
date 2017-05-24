export default function GroupStatisticsCtrl(ActiveCache, Group) {

    let _statistics = null;

    this.resolve = function () {
        if (ActiveCache.group) {
            if (_statistics === null) {
                _statistics = Group.statistics({
                    id: ActiveCache.group.id
                });
            }
            return _statistics;
        }
    };

}

GroupStatisticsCtrl.$inject = ['ActiveCache', 'Group'];
