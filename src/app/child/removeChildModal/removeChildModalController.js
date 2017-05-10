angular.module('child').controller('removeChildModalController', ['$state', '$scope', '$uibModalInstance', 'child', 'ActiveCache',
    function ($state, $scope, $uibModalInstance, child, ActiveCache) {
        $scope.removeChild = function () {
            child.$remove(function() {
                ActiveCache.child = null;
                $state.go('group', {groupId: ActiveCache.group.id});
                $scope.dismiss();
            });
        };

        $scope.dismiss = function () {
            $uibModalInstance.dismiss();
        };
    }
]);
