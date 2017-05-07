angular.module('schoolApp').run(['$rootScope', '$http', '$location', '$window', 'ListService',
    function ($rootScope, $http, $location, $window, ListService) {
        angular.extend($rootScope, {
            relationshipTypes: []
        });

        $rootScope.applicationUrl = $window.location.toString().substring(0, $window.location.toString().indexOf('#'));

        $http.get('api/context/authentication').then(function(data) {
            $rootScope.credentials = {
                authenticated: data.name != 'anonymousUser',
                username: data.name,
                authorities: data.authorities
            };
        });

        ListService.relationshipTypes().then(function (data) {
            $rootScope.relationshipTypes = data;
        });

    }
]);
