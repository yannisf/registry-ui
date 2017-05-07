function BreadcrumbCtrl($state, $cookieStore, ActiveCache) {

    this.$onInit = function () {
        // console.log('Initializing BreadcrumbCtrl', this);
    };

    this.getSchool = function () {
        return ActiveCache.school;
    }

    this.getDepartment = function () {
        return ActiveCache.department;
    }

    this.getGroup = function () {
        return ActiveCache.group;
    }

    this.getChildName = function () {
        return ActiveCache.getChildName();
    }

    this.toSchool = function () {
        ActiveCache.clearDepartment();
        $cookieStore.remove('group');
        $state.go('overview');
    };

    this.toDepartment = function () {
        console.log('toDepartment: ActiveCache', ActiveCache);
        ActiveCache.clearGroup();
        $cookieStore.remove('group');
        $state.go('overview');
    };

    this.toGroup = function () {
        ActiveCache.clearChild();
        $state.go('overview', {
            groupId: ActiveCache.group.id
        });
    };

    this.toChild = function () {
        $state.go('viewChild', {
            childId: ActiveCache.child.id
        });
    };

}

BreadcrumbCtrl.$inject = ['$state', '$cookieStore', 'ActiveCache'];
