import template from './group.control.tpl.html';

export default function groupControlDir() {
    return {
        restrict: 'A',
        scope: {
            group: '=groupControl',
            groups: '=',
        },
        template: template,
        bindToController: true,
        controllerAs: '$ctrl',
        controller: 'GroupControlCtrl'
    };
}
