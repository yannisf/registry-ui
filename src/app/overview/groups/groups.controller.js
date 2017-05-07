function GroupsCtrl(uuid4, Group, ActiveCache) {

    this.$onInit = function () {
        console.log('Initializing GroupsCtrl', this);
        if (ActiveCache.group) {
            this.active.group = ActiveCache.group;
        }
    };


    this.addGroup = function () {
        this.groups.$resolved = false;
        let group = new Group({
            id: uuid4.generate(),
            name: 'Νεα χρόνια'
        });
        group.$save({
            departmentId: this.active.department.id
        }, () => {
            this.groups = Group.query({
                departmentId: this.active.department.id
            }, () => {
                this.active.department.numberOfGroups++;
            });
        });
    };
    
}

GroupsCtrl.$inject = ['uuid4', 'Group', 'ActiveCache'];
