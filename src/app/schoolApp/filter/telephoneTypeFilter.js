angular.module('schoolApp').filter('telephoneTypeFilter', ['telephoneTypeMap',
    function (telephoneTypeMap) {
        return function (value) {
            return telephoneTypeMap[value];
        };
    }
]);
