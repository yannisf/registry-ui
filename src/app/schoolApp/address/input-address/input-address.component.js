function inputAddressComponent() {
    return {
        bindings: {
            address: "=",
            allowCopy: "="
        },
        templateUrl: "app/schoolApp/address/input-address/input-address.tpl.html",
        controller: 'InputAddressCtrl'
    }
}
