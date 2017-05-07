function UpdateChildCtrl($stateParams, $state, $uibModal, typeAheadService, Child, Address, ActiveCache) {

    this.$onInit = function () {
        this.child = Child.get({
            id: $stateParams.childId
        }, (response) => {
            ActiveCache.child = response;
        });

        this.address = Address.getForPerson({
            personId: $stateParams.childId
        });

        this.submitLabel = 'Επεξεργασία';
        this.typeaheads = typeAheadService;
    };

    this.cancel = function () {
        $state.go('viewChild', {
            childId: ActiveCache.child.id
        });
    };

    this.submit = function () {
        // if ($scope.childForm.$pristine) {
        //     console.log('Form is pristine');
        //     $state.go('viewChild', {
        //         childId: ActiveCache.child.id
        //     });
        // } else if ($scope.childForm.$invalid) {
        //     console.log('Form is invalid');
        // } else {
        this.address.$save(() => {
            this.child.$save({
                addressId: this.address.id,
                groupId: ActiveCache.group.id
            }, () => {
                ActiveCache.child = this.child;
                $state.go('viewChild', {
                    childId: ActiveCache.child.id
                });
            });
        });
        // }
    };
}

UpdateChildCtrl.$inject = ['$stateParams', '$state', '$uibModal', 'typeAheadService', 'Child', 'Address', 'ActiveCache'];
