import template from './telephones.tpl.html';

export default function telephonesComponent() {
    return {
        bindings: {
            model: "=",
        },
        template: template,
        controller: 'TelephonesCtrl'
    };
}
