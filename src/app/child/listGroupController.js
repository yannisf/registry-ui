angular.module('child').controller('listGroupController', ['$scope', '$stateParams', '$cookieStore', 'ActiveCache', 'Group',
    function ($scope, $stateParams, $cookieStore, ActiveCache, Group) {
        angular.extend($scope, {
            data: {
               children: []
            },
            viewData: {
                groupId: $stateParams.groupId,
                noChildren: false
            }
        });

        console.log('groupId in listGroupController:', $scope.viewData.groupId);

        ActiveCache.resolveGroup($stateParams.groupId).then(function() {
            // $cookieStore.put('group', $stateParams.groupId);
            $scope.data.children = Group.children({id: $stateParams.groupId}, function(response) {
                 $scope.viewData.noChildren = response.length === 0;
                 ActiveCache.children = response;
                 ActiveCache.childIds = response.map(function (child) {
                     return child.id;
                });
            });
        });


        $scope.goToChild = function ($event) {
            var clickedElement = angular.element($event.target);
            var childId = clickedElement.scope().child.id;
            $scope.go('/child/' + childId + '/view', $event);
        };
    }

]);
