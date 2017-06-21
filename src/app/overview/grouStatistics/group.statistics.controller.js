export default class GroupStatisticsCtrl {

    constructor(ActiveCache, Group) {
        Object.assign(this, {
            ActiveCache,
            Group
        });
        this._statistics = null;
    }

    resolve() {
        if (this.ActiveCache.group) {
            if (this._statistics === null) {
                this._statistics = this.Group.statistics({
                    id: this.ActiveCache.group.id
                });
            }
            return this._statistics;
        }
    }

}

GroupStatisticsCtrl.$inject = ['ActiveCache', 'Group'];
