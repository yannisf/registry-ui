function GroupsCtrl(uuid4, Group, ActiveCache) {

    this.$onInit = function () {
        console.log('Initializing GroupsCtrl', this);
    };

    this.showGroups = function () {
        return this.hasActiveDepartment() &&
            this.groupsResolved() &&
            this.hasGroups();
    }

    this.hasActiveDepartment = function () {
        return ActiveCache.department != null;
    }

    this.groupsResolved = function () {
        return this.overviewCtrl.groups.$resolved;
    }

    this.hasGroups = function () {
        return this.overviewCtrl.groups.length > 0;
    }

    this.setActiveGroup = function (group) {
        this.overviewCtrl.setActiveGroup(group);
    };

    this.isActiveGroup = function (group) {
        if (ActiveCache.group) {
            return group.id === ActiveCache.group.id;
        }
    }

    this.addGroup = function () {
        this.overviewCtrl.groups.$resolved = false;
        let group = new Group({
            id: uuid4.generate(),
            name: 'Νεα χρόνια'
        });
        group.$save({
            departmentId: ActiveCache.department.id
        }, () => {
            this.overviewCtrl.groups = Group.query({
                departmentId: ActiveCache.department.id
            }, () => {
                ActiveCache.department.numberOfGroups++;
            });
        });
    };
}

GroupsCtrl.$inject = ['uuid4', 'Group', 'ActiveCache'];
