export default function GroupControlCtrl($scope, $element, $state, ActiveCache) {

    this.$onInit = function () {
        // console.log('Initializing GroupControlCtrl', this);
        this.originalName = this.group.name;

        $element.on('keyup', ($event) => {
            $scope.$apply(() => {
                console.log('$event handling');
                if ($event.keyCode === 13) {
                    this.update();
                } else if ($event.keyCode === 27) {
                    this.cancel();
                }
            });
        });

    };

    this.working = false;

    this.toGroup = function () {
        ActiveCache.group = this.group;
        $state.go('group', {
            groupId: ActiveCache.group.id
        });
    };

    this.remove = function () {
        this.working = true;
        this.group.$remove({}, () => {
            let index = this.groups.indexOf(this.group);
            this.groups.splice(index, 1);
            if (this.group.id === ActiveCache.group.id) {
                ActiveCache.group = null;
            }
            ActiveCache.department.numberOfGroups--;
            this.working = false;
        });
    };

    this.edit = function () {
        this.editMode = true;
    };

    this.cancel = function () {
        this.editMode = false;
        this.group.name = this.originalName;
    };

    this.update = function () {
        this.working = true;
        this.editMode = false;
        this.group.$save({
            departmentId: ActiveCache.department.id
        }, () => {
            this.working = false;
        });
    };

}

GroupControlCtrl.$inject = ['$scope', '$element', '$state', 'ActiveCache'];
