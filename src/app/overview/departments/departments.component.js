function departmentsComponent() {
    return {
        templateUrl: "app/overview/departments/departments.tpl.html",
        controller: 'DepartmentsCtrl',
        require: {
            overviewCtrl: '^overview'
        }
    };
}
