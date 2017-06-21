export default class UpdateChildCtrl {

    constructor($stateParams, $state, $uibModal, typeAheadService, Child, Address, ActiveCache) {
        Object.assign(this, {
            $stateParams,
            $state,
            $uibModal,
            typeAheadService,
            Child,
            Address,
            ActiveCache
        });
    }

    $onInit() {
        this.child = this.Child.get({
            id: this.$stateParams.childId
        }, (response) => {
            this.ActiveCache.child = response;
        });

        this.address = this.Address.getForPerson({
            personId: this.$stateParams.childId
        });

        this.submitLabel = 'Επεξεργασία';
        this.typeaheads = this.typeAheadService;

        this.calendar = {
            open: function () {
                this.opened = true;
            },
            opened: false,
            dateOptions: {
                maxDate: new Date(),
                maxMode: 'month',
                initDate: (function () {
                    let initDate = new Date();
                    initDate.setFullYear(initDate.getFullYear() - 5);
                    return initDate;
                })(),
                startingDay: 1,
                showWeeks: false
            }
        };
    }

    cancel() {
        this.$state.go('viewChild', {
            childId: this.ActiveCache.child.id
        });
    }

    submit() {
        this.address.$save(() => {
            this.child.$save({
                addressId: this.address.id,
                groupId: this.ActiveCache.group.id
            }, () => {
                this.ActiveCache.child = this.child;
                this.$state.go('viewChild', {
                    childId: this.ActiveCache.child.id
                });
            });
        });

    }
}

UpdateChildCtrl.$inject = ['$stateParams', '$state', '$uibModal', 'TypeaheadSvc', 'Child', 'Address', 'ActiveCache'];
