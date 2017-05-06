(function () {
    'use strict';

    angular.module('child').controller('createChildController', ['$state', '$scope', 'uuid4', 'ActiveCache', 'Child', 'Address',
        function ($state, $scope, uuid4, ActiveCache, Child, Address) {
            angular.extend($scope, {
                data: {
                    child: new Child({id: uuid4.generate()}),
                    address: new Address({id: uuid4.generate()})
                },
                viewData: {
                    submitLabel: 'Εισαγωγή'
                }
            });

            ActiveCache.child = null;

            $scope.submit = function() {
                $scope.data.address.$save(function () {
                    $scope.data.child.$save({addressId: $scope.data.address.id, groupId: ActiveCache.group.id},
                        function() {
                            ActiveCache.child = $scope.data.child;
                            $state.go('viewChild', {childId: ActiveCache.child.id})
                        }
                    );
                });
            };

            $scope.cancel = function() {
                $state.go('group', {groupId: ActiveCache.group.id});
            };
        }
    ]);

}());
