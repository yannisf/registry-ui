import template from './departments.tpl.html';

export default function departmentsComponent() {
    return {
        template: template,
        controller: 'DepartmentsCtrl',
        require: {
            overviewCtrl: '^overview'
        }
    };
}
