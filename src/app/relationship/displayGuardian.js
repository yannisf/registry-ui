

angular.module('schoolApp')

    .directive('displayGuardian', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                guardian: "=",
                address: "="
            },
            templateUrl: "app/relationship/displayGuardian.tpl.html"
        };
    });
    