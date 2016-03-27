angular.module('child').controller('removeRelationshipModalController', ['$scope', '$uibModalInstance', 'ActiveCache', 'Relationship', 'relationship',
    function ($scope, $uibModalInstance, ActiveCache, Relationship, relationship) {
        $scope.removeRelationship = function () {
            relationship.$remove(function () {
                $scope.data.relationships = Relationship.query({childId: ActiveCache.child.id}, function() {
                    $scope.dismiss();
                });
            });
        };

        $scope.dismiss = function () {
            $uibModalInstance.dismiss();
        };
    }
]);
