import angular from 'angular';
import inputAddress from './input-address';

export default angular.module('address', [inputAddress])
    .factory('Address', ['$resource', function ($resource) {
        return $resource('api/address/:id', {
            id: '@id'
        }, {
            save: {
                method: 'PUT',
                params: {
                    id: null
                }
            },
            getForPerson: {
                method: 'GET',
                url: 'api/address/person/:personId'
            }
        });
    }])
    .filter('addressFilter', [function () {
        function formatAddress(address) {
            var formattedAddress = '';
            if (address.streetName) {
                formattedAddress = address.streetName;
                if (address.streetNumber) {
                    formattedAddress += ' ' + address.streetNumber;
                }
            }
            if (address.neighbourhood) {
                if (formattedAddress.length > 0) {
                    formattedAddress += ', ' + address.neighbourhood;
                } else {
                    formattedAddress += address.neighbourhood;
                }
            }
            if (address.postalCode) {
                if (formattedAddress.length > 0) {
                    formattedAddress += ', ' + address.postalCode;
                } else {
                    formattedAddress += address.postalCode;
                }
            }
            if (address.city) {
                if (formattedAddress.length > 0) {
                    formattedAddress += ', ' + address.city;
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
    }])
    .name;
