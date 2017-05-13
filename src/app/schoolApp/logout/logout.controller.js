export default function LogoutCtrl($rootScope, $http, $window) {

    this.$onInit = function() {
        $http.get('api/context/authentication').then((data) => {
            this.user = data.name;
        });
    };

    this.logout = function() {
        delete $http.defaults.headers.common["X-Requested-With"];
        $http.get('logout').then(() => {
                $window.location.replace($rootScope.applicationUrl);
            }
        );
    };
}

LogoutCtrl.$inject = ['$rootScope', '$http', '$window']
