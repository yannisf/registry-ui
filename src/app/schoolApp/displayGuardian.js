angular.module('schoolApp').directive('displayGuardian', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                guardian: "=",
                address: "="
            },
            templateUrl: "app/schoolApp/displayGuardian.tpl.html"
        };
    }
]);
    