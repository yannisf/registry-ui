import template from './schools.tpl.html';

export default function schoolsComponent() {
    return {
        template: template,
        controller: 'SchoolsCtrl',
        require: {
            overviewCtrl: '^overview'
        }
    };
}
