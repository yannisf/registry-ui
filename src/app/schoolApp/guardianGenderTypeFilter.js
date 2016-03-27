angular.module('schoolApp').filter('guardianGenderTypeFilter', ['guardianGenderTypeMap',
    function (guardianGenderTypeMap) {
        return function (value) {
            return guardianGenderTypeMap[value];
        };
    }
]);