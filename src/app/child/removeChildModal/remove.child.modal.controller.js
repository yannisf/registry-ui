export default function RemoveChildModalCtrl($state, $uibModalInstance, child, ActiveCache) {


    this.removeChild = function () {
        child.$remove(() => {
            ActiveCache.child = null;
            $state.go('group', {
                groupId: ActiveCache.group.id
            });
            $uibModalInstance.dismiss();
        });
    };

    this.dismiss = function () {
        $uibModalInstance.dismiss();
    };
}

RemoveChildModalCtrl.$inject = ['$state', '$uibModalInstance', 'child', 'ActiveCache'];
