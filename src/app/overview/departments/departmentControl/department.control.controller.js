export default class DepartmentControlCtrl {

    constructor($scope, $element, ActiveCache) {
        Object.assign(this, {
            $scope,
            $element,
            ActiveCache
        });
        this.working = false;
    }


    $onInit() {
        this._oldName = this.department.name;
        this.$element.on('keyup', ($event) => {
            this.$scope.$apply(() => {
                if ($event.keyCode === 13) {
                    this.update();
                } else if ($event.keyCode === 27) {
                    this.cancel();
                }
            });
        });
    }

    remove() {
        this.working = true;
        this.department.$remove({}, () => {
            let index = this.departments.indexOf(this.department);
            this.departments.splice(index, 1);
            if (this.department.id === this.ActiveCache.department.id) {
                this.ActiveCache.department = null;
            }
            this.ActiveCache.school.numberOfDepartments--;
            this.working = false;
        });
    }

    edit() {
        this.editMode = true;
    }

    cancel() {
        this.editMode = false;
        this.department.name = this._oldName;
    }

    update() {
        this.editMode = false;
        this.working = true;
        this.department.$save({
            schoolId: this.ActiveCache.school.id
        }, () => {
            this.working = false;
        });
    }

}

DepartmentControlCtrl.$inject = ['$scope', '$element', 'ActiveCache'];
