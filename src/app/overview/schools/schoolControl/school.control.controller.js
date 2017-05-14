export default function SchoolControlCtrl($scope, $element, ActiveCache) {

    this.$onInit = function () {
        this._oldName = this.school.name;

        $element.on('keyup', ($event) => {
            $scope.$apply(() => {
                console.log('$event handling');
                if ($event.keyCode === 13) {
                    this.update();
                } else if ($event.keyCode === 27) {
                    this.cancel();
                }
            })
        });

    };

    this.working = false;

    this.remove = function () {
        this.working = true;
        this.school.$remove({},
            () => {
                let index = this.schools.indexOf(this.school);
                this.schools.splice(index, 1);
                if (this.school.id === ActiveCache.school.id) {
                    ActiveCache.school = null;
                }
                this.working = false;
            },
            () => {
                this.working = false;
            });
    };

    this.edit = function () {
        this.editMode = true;
    };

    this.cancel = function () {
        this.editMode = false;
        this.school.name = this._oldName;
    };

    this.update = function () {
        this.editMode = false;
        this.working = true;
        this.school.$save({}, () => {
            this.working = false;
        });
    };
}

SchoolControlCtrl.$inject = ['$scope', '$element', 'ActiveCache']
