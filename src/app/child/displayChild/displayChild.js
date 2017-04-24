angular.module('child').component('displayChild', {
    bindings: {
        child: "=",
        address: "="
    },
    templateUrl: "app/child/displayChild/displayChild.tpl.html",
    controller: ['AddressService', function (AddressService) {
        this.isBlankAddress = AddressService.isBlank;
    }]
});
