import template from '../guardian.form.tpl.html';

export default function createGuardianComponent() {
    return {
        template: template,
        controller: 'CreateGuardianCtrl'
    };
}
