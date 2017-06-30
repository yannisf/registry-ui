export default class NavbarCtrl {

    constructor($rootScope, $window, $state, $cookieStore, $document, $http, ActiveCache) {
        Object.assign(this, {
            $rootScope,
            $window,
            $state,
            $cookieStore,
            $document,
            $http,
            ActiveCache
        })
        this.active = ActiveCache;
    }

    $onInit() {
        this.$http.get('api/context/authentication').then((response) => {
            this.username = response.data.name;
            this.authorities = response.data.authorities;
        });
    }

    toOverview() {
        this.ActiveCache.clearChild();
        this.$cookieStore.remove('group');
        this.$state.go('overview');
    }

    toGroup() {
        this.$state.go('group', {
            groupId: this.ActiveCache.group.id
        });
    }

    revision() {
        let uiRevision = this.$document[0].querySelector('meta[name="hash"]').getAttribute('content');
        this.$http.get('api/context/info')
            .then((response) => {
                let serverRevision = response.data['git-hash']
                console.log('Revision:', uiRevision, serverRevision);
            });
    }

    logout() {
        delete this.$http.defaults.headers.common['X-Requested-With'];
        this.$http.get('logout').then(() => {
            this.$window.location.replace(this.$rootScope.applicationUrl);
        });
    }

}

NavbarCtrl.$inject = ['$rootScope', '$window', '$state', '$cookieStore', '$document', '$http', 'ActiveCache'];
