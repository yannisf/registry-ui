angular.module('overview')

    .controller('overviewController', ['$scope', '$cookieStore', 'uuid4', 'School', 'Department', 'Group', 'ActiveCache',
        function ($scope, $cookieStore, uuid4, School, Department, Group, ActiveCache) {

            console.log('Initializing overview controller');

            angular.extend($scope, {
                data: {
                    schools: [],
                    departments: [],
                    groups: []
                },
                viewData: {
                    active: ActiveCache
                }
            });

            // if ($cookieStore.get('group')) {
                // var groupId = $cookieStore.get('group');
                // $location.path('/group/' + groupId);
            // }

            $scope.$watch('viewData.active.school', function (newval) {
                if (newval) {
                    $scope.data.departments = Department.query({
                        schoolId: newval.id
                    });
                }
            });

            $scope.$watch('viewData.active.department', function (newval) {
                if (newval) {
                    $scope.data.groups = Group.query({
                        departmentId: newval.id
                    });
                }
            });

            $scope.setActiveSchool = function (school) {
                $scope.viewData.active.school = school;
                ActiveCache.clearDepartment();
            };

            $scope.setActiveDepartment = function (department) {
                $scope.viewData.active.department = department;
                ActiveCache.clearGroup();
            };

            $scope.setActiveGroup = function (group) {
                $scope.viewData.active.group = group;
                ActiveCache.clearChild();
            };
        }
    ]);
