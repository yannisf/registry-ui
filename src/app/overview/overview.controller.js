function OverviewCtrl($cookieStore,School, Department, Group, ActiveCache) {

    this.$onInit = function () {
        console.log('Initializing OverviewCtrl', this);
        console.log('OverviewCtrl: ActiveCache', ActiveCache);
        if (ActiveCache.department) {
            this.departments = Department.query({schoolId: ActiveCache.school.id});
            this.groups = Group.query({departmentId: ActiveCache.department.id});
        } else if (ActiveCache.school) {
            this.departments = Department.query({schoolId: ActiveCache.school.id});
        }

    };

    this.schools = [];
    this.departments = [];
    this.groups = [];

    // if ($cookieStore.get('group')) {
    // var groupId = $cookieStore.get('group');
    // $location.path('/group/' + groupId);
    // }

    this.setActiveSchool = function (school) {
        console.log('setActiveSchool', school);
        ActiveCache.school = school;
        ActiveCache.clearDepartment();
        this.departments = Department.query({schoolId: school.id});
    };

    this.setActiveDepartment = function (department) {
        console.log('OverviewCtrl/setActiveDepartment: department', department);
        ActiveCache.department = department;
        ActiveCache.clearGroup();
        this.groups = Group.query({departmentId: department.id});
    };

    this.setActiveGroup = function (group) {
        ActiveCache.group = group;
        ActiveCache.clearChild();
    };
}

OverviewCtrl.$inject = ['$cookieStore', 'School', 'Department', 'Group', 'ActiveCache'];
