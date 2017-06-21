export default class DisplayGuardianCtrl {

    constructor(AddressService) {
        Object.assign(this, {
            AddressService
        })
    }

    isBlankAddress(address) {
        return this.AddressService.isBlank(address);
    }

}

DisplayGuardianCtrl.$inject = ['AddressService'];
