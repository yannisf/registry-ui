export default class NavbarCtrl {

    constructor($state, $cookieStore, ActiveCache) {
        Object.assign(this, {
            $state,
            $cookieStore,
            ActiveCache
        })
        this.active = ActiveCache;
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
}

NavbarCtrl.$inject = ['$state', '$cookieStore', 'ActiveCache'];
