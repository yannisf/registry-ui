import template from './display.guardian.tpl.html';
import DisplayGuardianCtrl from './display.guardian.controller';

export default {
    bindings: {
        guardian: '=',
        address: '='
    },
    template: template,
    controller: DisplayGuardianCtrl
};
