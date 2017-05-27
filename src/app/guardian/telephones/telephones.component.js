import template from './telephones.tpl.html';

export default function telephonesComponent() {
    return {
        bindings: {
            model: '=',
            form: '='
        },
        template: template,
        controller: 'TelephonesCtrl'
    };
}
