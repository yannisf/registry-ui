function GroupListCtrl($state, $stateParams, $cookieStore, ActiveCache, Group) {

    this.children = [];
    this.groupId = $stateParams.groupId;
    this.noChildren = false;

    this.$onInit = function () {
        // console.log('Initializing GroupListCtrl:', this);
        ActiveCache.resolveGroup($stateParams.groupId).then(() => {
            // $cookieStore.put('group', $stateParams.groupId);
            this.children = Group.children({
                id: $stateParams.groupId
            }, (response) => {
                this.noChildren = response.length === 0;
                ActiveCache.children = response;
                ActiveCache.childIds = response.map(function (child) {
                    return child.id;
                });
            });
        });
    };

    this.viewChild = function ($event) {
        let clickedElement = angular.element($event.target);
        let childId = clickedElement.scope().child.id;
        $event.stopPropagation();
        $state.go('viewChild', {
            childId: childId
        });
    };
}

GroupListCtrl.$inject = ['$state', '$stateParams', '$cookieStore', 'ActiveCache', 'Group']
