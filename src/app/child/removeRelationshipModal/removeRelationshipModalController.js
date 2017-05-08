angular.module('child').controller('removeRelationshipModalController', ['$scope', '$uibModalInstance', 'ActiveCache', 'Relationship', 'relationship', 'viewChildCtrl',
    function ($scope, $uibModalInstance, ActiveCache, Relationship, relationship, viewChildCtrl) {
        $scope.removeRelationship = function () {
            relationship.$remove(function () {
                viewChildCtrl.relationships = Relationship.query({childId: ActiveCache.child.id}, function() {
                    $scope.dismiss();
                });
            });
        };

        $scope.dismiss = function () {
            $uibModalInstance.dismiss();
        };
    }
]);
