function OverviewCtrl($rootScope, $cookieStore, uuid4, School, Department, Group, ActiveCache) {

    this.$onInit = function () {
        console.log('Initializing OverviewCtrl', this);
    };

    this.schools = [];
    this.departments = [];
    this.groups = [];
    this.active = ActiveCache;

    // if ($cookieStore.get('group')) {
    // var groupId = $cookieStore.get('group');
    // $location.path('/group/' + groupId);
    // }

    this.setActiveSchool = function (school) {
        console.log('setActiveSchool', school);
        ActiveCache.school = school;
        ActiveCache.clearDepartment();
        this.departments = Department.query({
            schoolId: school.id
        });
    };

    this.setActiveDepartment = function (department) {
        ActiveCache.department = department;
        ActiveCache.clearGroup();
    };

    this.setActiveGroup = function (group) {
        ActiveCache.group = group;
        ActiveCache.clearChild();
    };
}

OverviewCtrl.$inject = ['$rootScope', '$cookieStore', 'uuid4', 'School', 'Department', 'Group', 'ActiveCache'];
