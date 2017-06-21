import template from './display.child.tpl.html';
import DisplayChildCtrl from './display.child.controller';

export default {
    bindings: {
        child: '=',
        address: '='
    },
    template: template,
    controller: DisplayChildCtrl
};
