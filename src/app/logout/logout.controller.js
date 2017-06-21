export default class LogoutCtrl {

    constructor($rootScope, $http, $window) {
        Object.assign(this, {$rootScope, $http, $window});
    }

    username() {
        if (this.$rootScope.credentials) {
            return this.$rootScope.credentials.username;
        }
    }

    logout() {
        delete this.$http.defaults.headers.common['X-Requested-With'];
        this.$http.get('logout').then(() => {
                this.$window.location.replace(this.$rootScope.applicationUrl);
            }
        );
    }
}

LogoutCtrl.$inject = ['$rootScope', '$http', '$window'];
