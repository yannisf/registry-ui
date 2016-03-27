angular.module('typeaheads').run(['$rootScope', 'typeAheadService',
    function ($rootScope, typeAheadService) {
        angular.extend($rootScope, {
            typeaheads: {
                getFirstNames: function (startsWith) {
                    return typeAheadService.getFirstNames(startsWith);
                },
                getLastNames: function (startsWith) {
                    return typeAheadService.getLastNames(startsWith);
                },
                getNationalities: function (startsWith) {
                    return typeAheadService.getNationalities(startsWith);
                },
                getProfessions: function (startsWith) {
                    return typeAheadService.getProfessions(startsWith);
                },
                getStreetNames: function (startsWith) {
                    return typeAheadService.getStreetNames(startsWith);
                },
                getNeighbourhoods: function (startsWith) {
                    return typeAheadService.getNeighbourhoods(startsWith);
                },
                getCities: function (startsWith) {
                    return typeAheadService.getCities(startsWith);
                }
            }
        });
    }
]);
