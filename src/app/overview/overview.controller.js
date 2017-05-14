export default function OverviewCtrl($state, $stateParams, $cookieStore, Department, Group, ActiveCache) {

    this.$onInit = function () {
        if ($stateParams.root) {
            $cookieStore.remove('group');
        }

        if ($cookieStore.get('group')) {
            ActiveCache.clearChild();
            let groupId = $cookieStore.get('group');
            $state.go('group', {
                groupId: groupId
            });
        }

        if (ActiveCache.department) {
            this.departments = Department.query({
                schoolId: ActiveCache.school.id
            });
            this.groups = Group.query({
                departmentId: ActiveCache.department.id
            });
        } else if (ActiveCache.school) {
            this.departments = Department.query({
                schoolId: ActiveCache.school.id
            });
        }

    };

    this.schools = [];
    this.departments = [];
    this.groups = [];

    this.setActiveSchool = function (school) {
        ActiveCache.school = school;
        ActiveCache.clearDepartment();
        this.departments = Department.query({
            schoolId: school.id
        });
    };

    this.setActiveDepartment = function (department) {
        ActiveCache.department = department;
        ActiveCache.clearGroup();
        this.groups = Group.query({
            departmentId: department.id
        });
    };

    this.setActiveGroup = function (group) {
        ActiveCache.group = group;
        ActiveCache.clearChild();
    };
}

OverviewCtrl.$inject = ['$state', '$stateParams', '$cookieStore', 'Department', 'Group', 'ActiveCache'];
