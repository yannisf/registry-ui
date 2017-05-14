import template from './../child.form.tpl.html';

export default function createChildComponent() {
    return {
        template: template,
        controller: 'CreateChildCtrl'
    };
}
