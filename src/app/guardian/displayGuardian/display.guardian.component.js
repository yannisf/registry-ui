import template from './display.guardian.tpl.html';

export default function displayGuardianComponent() {
    return {
        bindings: {
            guardian: "=",
            address: "="
        },
        template: template,
        controller: 'DisplayGuardianCtrl'
    };
}
