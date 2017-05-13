export default function NavbarCtrl($state, $cookieStore, ActiveCache) {

    this.active = ActiveCache;

    this.toOverview = function () {
        ActiveCache.clearChild();
        $cookieStore.remove('group');
        $state.go('overview');
    };

    this.toGroup = function () {
        $state.go('group', {
            groupId: ActiveCache.group.id
        });
    };
}

NavbarCtrl.$inject = ['$state', '$cookieStore', 'ActiveCache'];
