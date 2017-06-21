export default class GroupsCtrl {

    constructor(uuid4, Group, ActiveCache) {
        Object.assign(this, {
            uuid4,
            Group,
            ActiveCache
        });
    }

    showGroups() {
        return this.hasActiveDepartment() &&
            this.groupsResolved() &&
            this.hasGroups();
    }

    hasActiveDepartment() {
        return this.ActiveCache.department !== null;
    }

    groupsResolved() {
        return this.overviewCtrl.groups.$resolved;
    }

    hasGroups() {
        return this.overviewCtrl.groups.length > 0;
    }

    setActiveGroup(group) {
        this.overviewCtrl.setActiveGroup(group);
    }

    isActiveGroup(group) {
        if (this.ActiveCache.group) {
            return group.id === this.ActiveCache.group.id;
        }
    }

    addGroup() {
        this.overviewCtrl.groups.$resolved = false;
        let group = new this.Group({
            id: this.uuid4.generate(),
            name: 'Νεα χρόνια'
        });
        group.$save({
            departmentId: this.ActiveCache.department.id
        }, () => {
            this.setActiveGroup(group);
            this.overviewCtrl.groups = this.Group.query({
                departmentId: this.ActiveCache.department.id
            }, () => {
                this.ActiveCache.department.numberOfGroups++;
            });
        });
    }
}

GroupsCtrl.$inject = ['uuid4', 'Group', 'ActiveCache'];
