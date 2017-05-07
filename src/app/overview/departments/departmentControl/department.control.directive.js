function departmentControlDir() {
    return {
        restrict: 'A',
        scope: {
            department: "=departmentControl",
            departments: "=",
        },
        templateUrl: "app/overview/departments/departmentControl/department.control.tpl.html",
        bindToController: true,
        controllerAs: '$ctrl',
        controller: 'DepartmentControlCtrl'
    };
}
