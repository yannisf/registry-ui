function schoolsComponent() {
    return {
        templateUrl: "app/overview/schools/schools.tpl.html",
        controller: 'SchoolsCtrl',
        require: {
            overviewCtrl: '^overview'
        }
    };
}
