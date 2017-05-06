function SchoolControlDir() {
    return {
        restrict: 'A',
        scope: {
            school: "=schoolControl",
            schools: "=",
            active: "="
        },
        bindToController: true,
        controllerAs: '$ctrl',
        templateUrl: "app/overview/schoolControl/school.control.tpl.html",
        controller: 'SchoolControlCtrl'
    };
}
