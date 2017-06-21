export default class UpdateGuardianCtrl {

    constructor($state, $stateParams, ActiveCache, Guardian, Relationship, Address, typeAheadService, ListSvc) {
        Object.assign(this, {
            $state,
            $stateParams,
            ActiveCache,
            Guardian,
            Relationship,
            Address,
            typeAheadService,
            ListSvc
        });
    }
    $onInit() {
        this.guardian = this.Guardian.get({
            id: this.$stateParams.guardianId
        });

        this.address = this.Address.getForPerson({
            personId: this.$stateParams.guardianId
        });

        this.relationship = this.Relationship.get({
            childId: this.ActiveCache.child.id,
            guardianId: this.$stateParams.guardianId
        });

        this.guardianId = this.$stateParams.guardianId;
        this.submitLabel = 'Επεξεργασία';
        this.typeaheads = this.typeAheadService;

        this.ListSvc.relationshipTypes().then((data) => this.relationshipTypes = data);

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
                    initDate.setFullYear(initDate.getFullYear() - 30);
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
        this.address.$save()
            .then(() => this.guardian.$save({
                addressId: this.address.id
            }))
            .then(() => this.relationship.$save({
                childId: this.ActiveCache.child.id,
                guardianId: this.guardian.id
            }))
            .then(() => this.$state.go('viewChild', {
                childId: this.ActiveCache.child.id
            }));
    }
}

UpdateGuardianCtrl.$inject = ['$state', '$stateParams', 'ActiveCache', 'Guardian', 'Relationship', 'Address', 'TypeaheadSvc', 'ListSvc'];
