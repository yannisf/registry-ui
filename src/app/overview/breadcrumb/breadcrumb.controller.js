export default class BreadcrumbCtrl {

    constructor($state, $cookieStore, ActiveCache) {
        Object.assign(this, {
            $state,
            $cookieStore,
            ActiveCache
        });
    }

    getSchool() {
        return this.ActiveCache.school;
    }

    getDepartment() {
        return this.ActiveCache.department;
    }

    getGroup() {
        return this.ActiveCache.group;
    }

    getChildName() {
        return this.ActiveCache.getChildName();
    }

    toSchool() {
        this.ActiveCache.clearDepartment();
        this.$cookieStore.remove('group');
        this.$state.go('overview');
    }

    toDepartment() {
        this.ActiveCache.clearGroup();
        this.$cookieStore.remove('group');
        this.$state.go('overview');
    }

    toGroup() {
        this.ActiveCache.clearChild();
        this.$state.go('overview', {
            groupId: this.ActiveCache.group.id
        });
    }

    toChild() {
        this.$state.go('viewChild', {
            childId: this.ActiveCache.child.id
        });
    }

}

BreadcrumbCtrl.$inject = ['$state', '$cookieStore', 'ActiveCache'];
