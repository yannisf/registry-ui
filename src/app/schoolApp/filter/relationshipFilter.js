angular.module('schoolApp').filter('relationshipFilter', ['relationshipMap',
    function (relationshipMap) {
        return function (value) {
            return relationshipMap[value];
        };
    }
]);

