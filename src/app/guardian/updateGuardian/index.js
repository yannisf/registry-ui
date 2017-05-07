angular.module('guardian').controller('updateGuardianController', ['$state', '$scope', '$stateParams', 'ActiveCache', 'Guardian', 'Relationship', 'Address',
            
    function ($state, $scope, $stateParams, ActiveCache, Guardian, Relationship, Address) {
        angular.extend($scope, {
            data: {
                guardian: Guardian.get({id: $stateParams.guardianId}),
                address: Address.getForPerson({personId: $stateParams.guardianId}),
                relationship: Relationship.get({
                    childId: ActiveCache.child.id,
                    guardianId: $stateParams.guardianId
                })
            },
            viewData: {
                guardianId: $stateParams.guardianId,
                submitLabel: "Επεξεργασία"
            }
        });

        $scope.cancel = function () {
            $scope.go('/child/' + ActiveCache.child.id + '/view');
        };

        $scope.submit = function () {
            $scope.data.address.$save().then(function() {
                return $scope.data.guardian.$save({
                    addressId: $scope.data.address.id
                });
            }).then(function() {
                return $scope.data.relationship.$save({
                    childId: ActiveCache.child.id,
                    guardianId: $scope.data.guardian.id
                });
            }).then(function() {
                $state.go('viewChild', {childId: ActiveCache.child.id});
            });
        };
    }

]);
