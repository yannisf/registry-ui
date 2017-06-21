import template from './school.control.tpl.html';
import SchoolControlCtrl from './school.control.controller';

export default function schoolControlDir() {
    return {
        restrict: 'A',
        scope: {
            school: '=schoolControl',
            schools: '='
        },
        template: template,
        bindToController: true,
        controllerAs: '$ctrl',
        controller: SchoolControlCtrl
    };
}
