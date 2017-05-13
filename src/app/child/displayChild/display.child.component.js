import template from './display.child.tpl.html';

export default function displayChildComponent() {
    return {
        bindings: {
            child: '=',
            address: '='
        },
        template: template,
        controller: 'DisplayChildCtrl'
    };
}
