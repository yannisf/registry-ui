import template from './display.child.controller';

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
