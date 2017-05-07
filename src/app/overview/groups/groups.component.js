function groupsComponent() {
    return {
        templateUrl: "app/overview/groups/groups.tpl.html",
        controller: 'GroupsCtrl',
        require: {
            overviewCtrl: '^overview'
        }
    };
}
