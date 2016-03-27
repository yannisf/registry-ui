angular.module('schoolApp').directive('telephone', [
    function () {
        return {
            restrict: 'E',
            scope: {
                telephone: "=model"
            },
            template: '{{telephone.number}} <span class="phone-type">{{telephone.type|telephoneTypeFilter}}</span>'
        };
    }
]);