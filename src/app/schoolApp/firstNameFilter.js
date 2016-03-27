angular.module('schoolApp').filter('firstNameFilter', [
    function () {
        return function (child) {
            var value = child.firstName;
            if (child.callName) {
                value += " (" + child.callName + ")";
            }
            return value;
        };
    }
]);
