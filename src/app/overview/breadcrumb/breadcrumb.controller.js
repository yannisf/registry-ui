function BreadcrumbCtrl($state, $cookieStore, ActiveCache) {

    this.$onInit = function () {
        console.log('Initializing BreadcrumbCtrl', this);
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
        let child = ActiveCache.child;
        if (child) {
            let name = child.firstName ? child.firstName + " " : "";
            if (child.callName) {
                name += "(" + child.callName + ") ";
            }
            name = (name + " " + (child.lastName ? child.lastName + " " : "")).trim();
            if (name.length === 0) {
                name = null;
            }
            return name;
        }
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
