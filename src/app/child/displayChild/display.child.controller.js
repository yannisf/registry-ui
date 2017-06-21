export default class DisplayChildCtrl {

    constructor(AddressService) {
        Object.assign(this, {
            AddressService
        });
    }

    isBlankAddress(address) {
        return this.AddressService.isBlank(address);
    }

}

DisplayChildCtrl.$inject = ['AddressService'];
