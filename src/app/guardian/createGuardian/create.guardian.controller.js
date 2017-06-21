export default class CreateGuardianCtrl {

    constructor($state, uuid4, ActiveCache, Guardian, Address, Relationship, typeAheadService, ListSvc) {
        Object.assign(this, {
            $state,
            uuid4,
            ActiveCache,
            Guardian,
            Address,
            Relationship,
            typeAheadService,
            ListSvc
        });
    }

    $onInit() {
        this.guardian = new this.Guardian({
            id: this.uuid4.generate(),
            telephones: []
        });

        this.address = new this.Address({
            id: this.uuid4.generate()
        });

        this.relationship = new this.Relationship({
            id: this.uuid4.generate(),
            metadata: {
                type: null
            }
        });

        this.submitLabel = 'Δημιουργία';
        this.sharedAddress = false;
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

CreateGuardianCtrl.$inject = ['$state', 'uuid4', 'ActiveCache', 'Guardian', 'Address', 'Relationship', 'TypeaheadSvc', 'ListSvc'];
