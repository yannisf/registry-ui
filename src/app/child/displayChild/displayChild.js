angular.module('child').directive('displayChild', ['AddressService',
    function (AddressService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                child: "=",
                address: "="
            },
            templateUrl: "app/child/displayChild/displayChild.tpl.html",
            link: function(scope) {
                scope.isBlankAddress = AddressService.isBlank;
            }
        };
    }
]);
