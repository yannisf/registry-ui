export default class OverviewCtrl {

    constructor($state, $stateParams, $cookieStore, Department, Group, ActiveCache) {
        Object.assign(this, {
            $state,
            $stateParams,
            $cookieStore,
            Department,
            Group,
            ActiveCache
        });
        this.schools = [];
        this.departments = [];
        this.groups = [];
    }

    $onInit() {
        if (this.$stateParams.root) {
            this.$cookieStore.remove('group');
        }

        if (this.$cookieStore.get('group')) {
            this.ActiveCache.clearChild();
            let groupId = this.$cookieStore.get('group');
            this.$state.go('group', {
                groupId: groupId
            });
        }

        if (this.ActiveCache.department) {
            this.departments = this.Department.query({
                schoolId: this.ActiveCache.school.id
            });
            this.groups = this.Group.query({
                departmentId: this.ActiveCache.department.id
            });
        } else if (this.ActiveCache.school) {
            this.departments = this.Department.query({
                schoolId: this.ActiveCache.school.id
            });
        }
    }


    setActiveSchool(school) {
        this.ActiveCache.school = school;
        this.ActiveCache.clearDepartment();
        this.departments = this.Department.query({
            schoolId: school.id
        });
    }

    setActiveDepartment(department) {
        this.ActiveCache.department = department;
        this.ActiveCache.clearGroup();
        this.groups = this.Group.query({
            departmentId: department.id
        });
    }

    setActiveGroup(group) {
        this.ActiveCache.group = group;
        this.ActiveCache.clearChild();
    }
}

OverviewCtrl.$inject = ['$state', '$stateParams', '$cookieStore', 'Department', 'Group', 'ActiveCache'];
