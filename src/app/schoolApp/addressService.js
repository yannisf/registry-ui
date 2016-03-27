angular.module('schoolApp').service('AddressService', [function () {
    return {
        isBlank: function (address) {
            return !(address && (
                address.streetName ||
                address.streetNumber ||
                address.neighbourhood ||
                address.postalCode ||
                address.city));
        }
    };
}]);