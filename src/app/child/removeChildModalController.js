angular.module('child').controller('removeChildModalController', ['$location', '$rootScope', '$scope', '$uibModalInstance', 'child', 'ActiveCache',
    function ($location, $rootScope, $scope, $uibModalInstance, child, ActiveCache) {
        $scope.removeChild = function () {
            child.$remove(function() {
                ActiveCache.child = null;
                $location.url('/group/' + ActiveCache.group.id);
                $scope.dismiss();
            });
        };

        $scope.dismiss = function () {
            $uibModalInstance.dismiss();
        };
    }
]);