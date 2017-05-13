export default function DisplayChildCtrl(AddressService) {

    this.isBlankAddress = function (address) {
        return AddressService.isBlank(address);
    }

};

DisplayChildCtrl.$inject = ['AddressService'];
