function groupControlDir() {
    return {
        restrict: 'A',
        scope: {
            group: '=groupControl',
            groups: '=',
        },
        templateUrl: 'app/overview/groups/groupControl/group.control.tpl.html',
        bindToController: true,
        controllerAs: '$ctrl',
        controller: 'GroupControlCtrl'
    };
}
