angular.module('schoolApp').filter('preSchoolLevelFilter', ['preSchoolLevelMap',
    function (preSchoolLevelMap) {
        return function (value) {
            return preSchoolLevelMap[value];
        };
    }
]);