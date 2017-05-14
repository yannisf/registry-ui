import template from './input-address.tpl.html';

export default function inputAddressComponent() {
    return {
        bindings: {
            address: "=",
            allowCopy: "="
        },
        template: template,
        controller: 'InputAddressCtrl'
    }
}
