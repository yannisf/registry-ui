import template from './input-address.tpl.html';
import InputAddressCtrl from './input-address.controller';

export default {
    bindings: {
        address: '=',
        allowCopy: '='
    },
    template: template,
    controller: InputAddressCtrl
};
