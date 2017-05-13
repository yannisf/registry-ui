export default function DisplayGuardianCtrl(AddressService) {

    this.isBlankAddress = function (address) {
        return AddressService.isBlank(address);
    }

};

DisplayGuardianCtrl.$inject = ['AddressService'];
