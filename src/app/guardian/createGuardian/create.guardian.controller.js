export default function CreateGuardianCtrl($state, uuid4, ActiveCache, Guardian, Address, Relationship, typeAheadService, ListSvc) {

    this.$onInit = function () {
        this.guardian = new Guardian({
            id: uuid4.generate(),
            telephones: []
        });

        this.address = new Address({
            id: uuid4.generate()
        });

        this.relationship = new Relationship({
            id: uuid4.generate(),
            metadata: {
                type: null
            }
        });

        this.submitLabel = 'Δημιουργία';
        this.sharedAddress = false;
        this.typeaheads = typeAheadService;

        ListSvc.relationshipTypes().then((data) => this.relationshipTypes = data);

        this.calendar = {
            open: function() {
                this.opened = true;
            },
            opened: false,
            dateOptions: {
                maxDate: new Date(),
                maxMode: 'month',
                initDate: (function() {
                    let initDate = new Date();
                    initDate.setFullYear(initDate.getFullYear() - 30);
                    return initDate;
                })(),
                startingDay: 1,
                showWeeks: false
            }
        };
    };

    this.cancel = function () {
        $state.go('viewChild', {
            childId: ActiveCache.child.id
        });
    };

    this.submit = function () {
        this.address.$save()
            .then(() => this.guardian.$save({
                addressId: this.address.id
            }))
            .then(() => this.relationship.$save({
                childId: ActiveCache.child.id,
                guardianId: this.guardian.id
            }))
            .then(() => $state.go('viewChild', {
                childId: ActiveCache.child.id
            }));
    };
}


CreateGuardianCtrl.$inject = ['$state', 'uuid4', 'ActiveCache', 'Guardian', 'Address', 'Relationship', 'TypeaheadSvc', 'ListSvc'];
