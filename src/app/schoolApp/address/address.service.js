angular.module('schoolApp').service('AddressService', [function () {

    this.isBlank = function (address) {
        return !(address && (
            address.streetName ||
            address.streetNumber ||
            address.neighbourhood ||
            address.postalCode ||
            address.city));
    }

}]);
