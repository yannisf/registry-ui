angular.module('child').component('displayChild', {
    bindings: {
        child: "=",
        address: "="
    },
    templateUrl: "app/child/displayChild/display.child.tpl.html",
    controller: ['AddressService', function (AddressService) {

        this.isBlankAddress = function(address) {
            return AddressService.isBlank(address);
        } 
        
    }]
});
