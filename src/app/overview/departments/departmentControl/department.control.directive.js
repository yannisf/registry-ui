import template from './department.control.tpl.html';
import DepartmentControlCtrl from './department.control.controller';


export default function departmentControlDir() {
    return {
        restrict: 'A',
        scope: {
            department: '=departmentControl',
            departments: '=',
        },
        template: template,
        bindToController: true,
        controllerAs: '$ctrl',
        controller: DepartmentControlCtrl
    };
}
