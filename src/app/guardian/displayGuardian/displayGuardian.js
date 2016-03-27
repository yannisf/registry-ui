angular.module('guardian').directive('displayGuardian', [

    function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                guardian: "=",
                address: "="
            },
            templateUrl: "app/guardian/displayGuardian/displayGuardian.tpl.html"
        };
    }
]);
    