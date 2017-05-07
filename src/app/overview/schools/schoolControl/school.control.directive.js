function schoolControlDir() {
    return {
        restrict: 'A',
        scope: {
            school: "=schoolControl",
            schools: "="
        },
        templateUrl: "app/overview/schools/schoolControl/school.control.tpl.html",
        bindToController: true,
        controllerAs: '$ctrl',
        controller: 'SchoolControlCtrl'
    };
}
