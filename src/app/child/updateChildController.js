angular.module('child').controller('updateChildController', ['$scope', '$stateParams', '$window', '$location', '$uibModal', 'Child', 'Address', 'Relationship', 'ActiveCache',
    function ($scope, $stateParams, $window, $location, $uibModal, Child, Address, Relationship, ActiveCache) {

        angular.extend($scope, {
            data: {
                child: Child.get({id: $stateParams.childId}, function(response) {
                    ActiveCache.child = response;
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
            $location.url('/child/' + ActiveCache.child.id + '/view');
        };

        $scope.submit = function () {
            if ($scope.childForm.$pristine) {
                console.log('Form is pristine');
                $location.url('/child/' + ActiveCache.child.id + '/view');
            } else if ($scope.childForm.$invalid) {
                console.log('Form is invalid');
            } else {
                $scope.data.address.$save(function () {
                    $scope.data.child.$save({addressId: $scope.data.address.id, groupId: ActiveCache.group.id},
                        function() {
                            ActiveCache.child = $scope.data.child;
                            $location.url('/child/' + ActiveCache.child.id + '/view');
                        }
                    );
                });
            }
        };

        $scope.addGuardian = function () {
            $location.path('/guardian/create');
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
