export default class DepartmentsCtrl {

    constructor(uuid4, Department, ActiveCache) {
        Object.assign(this, {
            uuid4,
            Department,
            ActiveCache
        });
    }

    showDepartments() {
        return this.hasActiveSchool() &&
            this.deparmentsResolved() &&
            this.hasDepartments();
    }

    hasActiveSchool() {
        return this.ActiveCache.school !== null;
    }

    deparmentsResolved() {
        let departments = this.overviewCtrl.departments;
        return departments.$resolved === undefined || departments.$resolved;
    }

    hasDepartments() {
        return this.overviewCtrl.departments.length > 0;
    }

    setActiveDepartment(department) {
        this.overviewCtrl.setActiveDepartment(department);
    }

    isActiveDepartment(department) {
        if (this.ActiveCache.department) {
            return department.id === this.ActiveCache.department.id;
        }
    }

    addDepartment() {
        this.overviewCtrl.departments.$resolved = false;
        let department = new this.Department({
            id: this.uuid4.generate(),
            name: 'Νεο τμήμα'
        });
        department.$save({
            schoolId: this.ActiveCache.school.id
        }, () => {
            this.setActiveDepartment(department);
            this.overviewCtrl.departments = this.Department.query({
                schoolId: this.ActiveCache.school.id
            }, () => {
                this.ActiveCache.school.numberOfDepartments++;
            });
        });
    }
}

DepartmentsCtrl.$inject = ['uuid4', 'Department', 'ActiveCache'];
