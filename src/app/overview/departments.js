

angular.module('overview').directive('departments', ['uuid4', 'Department', 'ActiveCache',
    function (uuid4, Department, ActiveCache) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: "app/overview/departments.tpl.html",
            controller: ['$scope', function($scope) {
				if (ActiveCache.department) {
					$scope.viewData.active.department = ActiveCache.department;
				}

                $scope.addDepartment = function() {
                    $scope.data.departments.$resolved = false;
                    var department = new Department({id: uuid4.generate(), name: 'Νεο τμήμα'});
                    $scope.setActiveDepartment(null);
                    department.$save({schoolId: $scope.viewData.active.school.id}, function() {
                        $scope.data.departments = Department.query({schoolId: $scope.viewData.active.school.id},
                            function() {
                                $scope.viewData.active.school.numberOfDepartments++;
                            }
                        );
                    });
                };
            }]
        };
    }
]);