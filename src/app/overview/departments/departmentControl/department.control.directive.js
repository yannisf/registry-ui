import template from './department.control.tpl.html';

export default function departmentControlDir() {
    return {
        restrict: 'A',
        scope: {
            department: "=departmentControl",
            departments: "=",
        },
        template: template,
        bindToController: true,
        controllerAs: '$ctrl',
        controller: 'DepartmentControlCtrl'
    };
}
