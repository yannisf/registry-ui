function DepartmentControlCtrl(Department, ActiveCache) {

    this.working = false;

    this.$onInit = function () {
        console.log('Initializing DepartmentControlCtrl');
        this._oldName = this.department.name;
    };

    this.remove = function () {
        this.working = true;
        this.department.$remove({}, () => {
            let index = this.departments.indexOf(this.department);
            this.departments.splice(index, 1);
            if (this.department.id === ActiveCache.department.id) {
                ActiveCache.department = null;
            }
            ActiveCache.school.numberOfDepartments--;
            this.working = false;
        });
    };

    this.edit = function () {
        this.editMode = true;
    };

    this.cancel = function () {
        this.editMode = false;
        this.department.name = this._oldName;
    };

    this.update = function () {
        this.editMode = false;
        this.working = true;
        this.department.$save({
            schoolId: this.active.school.id
        }, () => {
            this.working = false;
        });
    };
}

DepartmentControlCtrl.$inject = ['Department', 'ActiveCache'];
