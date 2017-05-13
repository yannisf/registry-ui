import angular from 'angular';

angular.module('schoolApp').filter('addressFilter', [function () {
    function formatAddress(address) {
        var formattedAddress = "";
        if (address.streetName) {
            formattedAddress = address.streetName;
            if (address.streetNumber) {
                formattedAddress += " " + address.streetNumber;
            }
        }
        if (address.neighbourhood) {
            if (formattedAddress.length > 0) {
                formattedAddress += ", " + address.neighbourhood;
            } else {
                formattedAddress += address.neighbourhood;
            }
        }
        if (address.postalCode) {
            if (formattedAddress.length > 0) {
                formattedAddress += ", " + address.postalCode;
            } else {
                formattedAddress += address.postalCode;
            }
        }
        if (address.city) {
            if (formattedAddress.length > 0) {
                formattedAddress += ", " + address.city;
            } else {
                formattedAddress += address.city;
            }
        }

        return formattedAddress;
    }

    return function (address) {
        if (address) {
            return formatAddress(address);
        }
    };
}]);
