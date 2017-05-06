angular.module('overview').directive('groupControl', ['$state', 'Group', 'ActiveCache',

	function ($state, Group, ActiveCache) {
		return {
			restrict: 'A',
			scope: {
				group: "=groupControl",
				groups: "=",
				viewData: "="
			},
			templateUrl: "app/overview/groupControl/groupControl.tpl.html",
			link: function(scope, element) {
				element.bind('keypress', function(e) {
					scope.$apply(function () {
						if (e.keyCode === 13) {
							scope.update();
						} else if (e.keyCode === 27) {
							scope.cancel();
						}
					});
				});
			},
			controller: ['$scope', function($scope) {
				$scope.working = false;

				$scope.toGroup = function() {
					ActiveCache.group = $scope.group;
					$state.go('group', {groupId: ActiveCache.group.id});
				};

				$scope.remove = function() {
					$scope.working = true;
					$scope.group.$remove({}, function() {
						var index = $scope.groups.indexOf($scope.group);
						$scope.groups.splice(index, 1);
						if ($scope.group.id === ActiveCache.group.id) {
							ActiveCache.group = null;
						}
						$scope.viewData.active.department.numberOfGroups--;
						$scope.working = false;
					});
				};

				var oldValue = $scope.group.name;
				$scope.edit = function() {
					$scope.editMode = true;
				};

				$scope.cancel = function() {
					$scope.editMode = false;
					$scope.group.name = oldValue;
				};

				$scope.update = function() {
					$scope.working = true;
					$scope.editMode = false;
					$scope.group.$save({departmentId: $scope.viewData.active.department.id}, function() {
						$scope.working = false;
					});
				};
			}]
		};
	}
]);
