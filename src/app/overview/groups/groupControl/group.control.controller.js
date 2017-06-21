export default class GroupControlCtrl {

    constructor($scope, $element, $state, ActiveCache) {
        Object.assign(this, {
            $scope,
            $element,
            $state,
            ActiveCache
        });
        this.working = false;
    }

    $onInit() {
        this.originalName = this.group.name;

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

    toGroup() {
        this.ActiveCache.group = this.group;
        this.$state.go('group', {
            groupId: this.ActiveCache.group.id
        });
    }

    remove() {
        this.working = true;
        this.group.$remove({}, () => {
            let index = this.groups.indexOf(this.group);
            this.groups.splice(index, 1);
            if (this.group.id === this.ActiveCache.group.id) {
                this.ActiveCache.group = null;
            }
            this.ActiveCache.department.numberOfGroups--;
            this.working = false;
        });
    }

    edit() {
        this.editMode = true;
    }

    cancel() {
        this.editMode = false;
        this.group.name = this.originalName;
    }

    update() {
        this.working = true;
        this.editMode = false;
        this.group.$save({
            departmentId: this.ActiveCache.department.id
        }, () => {
            this.working = false;
        });
    }

}

GroupControlCtrl.$inject = ['$scope', '$element', '$state', 'ActiveCache'];
