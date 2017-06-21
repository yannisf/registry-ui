export default class SchoolControlCtrl {

    constructor($scope, $element, ActiveCache) {
        Object.assign(this, {
            $scope,
            $element,
            ActiveCache
        });
        this.working = false;
    }

    $onInit() {
        this._oldName = this.school.name;
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
        this.school.$remove({},
            () => {
                let index = this.schools.indexOf(this.school);
                this.schools.splice(index, 1);
                if (this.school.id === this.ActiveCache.school.id) {
                    this.ActiveCache.school = null;
                }
                this.working = false;
            },
            () => {
                this.working = false;
            });
    }

    edit() {
        this.editMode = true;
    }

    cancel () {
        this.editMode = false;
        this.school.name = this._oldName;
    }

    update () {
        this.editMode = false;
        this.working = true;
        this.school.$save({}, () => {
            this.working = false;
        });
    }
}

SchoolControlCtrl.$inject = ['$scope', '$element', 'ActiveCache'];
