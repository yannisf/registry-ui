angular.module('child').controller('updateChildController', ['$scope', '$stateParams', '$window', '$state', '$uibModal', 'Child', 'Address', 'Relationship', 'ActiveCache',
    function ($scope, $stateParams, $window, $state, $uibModal, Child, Address, Relationship, ActiveCache) {

        angular.extend($scope, {
            data: {
                child: Child.get({id: $stateParams.childId}, function(response) {
                    ActiveCache.child = response;
                    console.log('updateChildController:ActiveCache', ActiveCache);
                }),
                address: Address.getForPerson({personId: $stateParams.childId}),
                relationships: Relationship.query({childId: $stateParams.childId})
            },
            viewData: {
                submitLabel: 'Επεξεργασία',
                hasChildrenIdsInScope: ActiveCache.childIds.length > 1
            }
        });

        $scope.cancel = function() {
            $state.go('viewChild', {childId: ActiveCache.child.id});
        };

        $scope.submit = function () {
            if ($scope.childForm.$pristine) {
                console.log('Form is pristine');
                $state.go('viewChild', {childId: ActiveCache.child.id});
            } else if ($scope.childForm.$invalid) {
                console.log('Form is invalid');
            } else {
                $scope.data.address.$save(function () {
                    $scope.data.child.$save({addressId: $scope.data.address.id, groupId: ActiveCache.group.id},
                        function() {
                            ActiveCache.child = $scope.data.child;
                            $state.go('viewChild', {childId: ActiveCache.child.id});
                        }
                    );
                });
            }
        };

        $scope.addGuardian = function () {
            $state.go('createGuardian')
        };

        $scope.goToGuardian = function ($event) {
            var clickedElement = angular.element($event.target);
            var guardianId = clickedElement.scope().relationship.guardian.id;
            $scope.go('/guardian/' + guardianId + '/view', $event);
        };

        $scope.confirmRemoveChild = function () {
            $uibModal.open({
                templateUrl: 'app/child/removeChildModal/removeChildModal.tpl.html',
                controller: 'removeChildModalController',
                resolve: {
                    child: function () {
                        return $scope.data.child;
                    }
                }
            });
        };

        $scope.confirmRemoveRelationship = function (relationship, $event) {
            $event.stopPropagation();
            $uibModal.open({
                templateUrl: 'app/child/removeRelationshipModal/removeRelationshipModal.tpl.html',
                controller: 'removeRelationshipModalController',
                scope: $scope,
                resolve: {
                    relationship: function () {
                        return relationship;
                    }
                }
            });
        };
    }
]);
