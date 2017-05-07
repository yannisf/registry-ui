function DepartmentsCtrl(uuid4, Department, ActiveCache) {

    this.$onInit = function () {
        console.log('Initializing DepartmentsCtrl', this);
    }

    this.showDepartments = function () {
        return this.hasActiveSchool() &&
            this.deparmentsResolved() &&
            this.hasDepartments();
    }

    this.hasActiveSchool = function () {
        return ActiveCache.school != null;
    }

    this.deparmentsResolved = function () {
        let departments =  this.overviewCtrl.departments;
        return !angular.isDefined(departments.$resolved) || departments.$resolved;
    }

    this.hasDepartments = function () {
        return this.overviewCtrl.departments.length > 0;
    }

    this.setActiveDepartment = function (department) {
        this.overviewCtrl.setActiveDepartment(department);
    };

    this.isActiveDepartment = function (department) {
        console.log('isActiveDepartment', department)
        console.log('ActiveCache.department', ActiveCache.department)
        if (ActiveCache.department) {
            return department.id === ActiveCache.department.id;
        }
    }

    this.addDepartment = function () {
        this.overviewCtrl.departments.$resolved = false;
        let department = new Department({
            id: uuid4.generate(),
            name: 'Νεο τμήμα'
        });
        this.setActiveDepartment(null);
        department.$save({
            schoolId: ActiveCache.school.id
        }, () => {
            this.overviewCtrl.departments = Department.query({
                schoolId: ActiveCache.school.id
            }, () => {
                ActiveCache.school.numberOfDepartments++;
            });
        });
    };
}

DepartmentsCtrl.$inject = ['uuid4', 'Department', 'ActiveCache'];
