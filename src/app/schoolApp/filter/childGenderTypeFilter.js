angular.module('schoolApp').filter('childGenderTypeFilter', ['childGenderTypeMap',
    function (childGenderTypeMap) {
        return function (value) {
            return childGenderTypeMap[value];
        };
    }
]);