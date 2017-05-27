export default function LogoutCtrl($rootScope, $http, $window) {

    this.username = function() {
        if ($rootScope.credentials) {
            return $rootScope.credentials.username;
        }
    };

    this.logout = function() {
        delete $http.defaults.headers.common['X-Requested-With'];
        $http.get('logout').then(() => {
                $window.location.replace($rootScope.applicationUrl);
            }
        );
    };
}

LogoutCtrl.$inject = ['$rootScope', '$http', '$window'];
