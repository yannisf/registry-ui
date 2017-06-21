import template from './telephones.tpl.html';
import TelephonesCtrl from './telephones.controller';

export default {
    bindings: {
        model: '=',
        form: '='
    },
    template: template,
    controller: TelephonesCtrl
};
