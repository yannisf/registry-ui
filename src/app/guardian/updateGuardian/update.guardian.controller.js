function UpdateGuardianCtrl($state, $stateParams, ActiveCache, Guardian, Relationship, Address, typeAheadService, ListService) {

    this.$onInit = function () {
        this.guardian = Guardian.get({
            id: $stateParams.guardianId
        });

        this.address = Address.getForPerson({
            personId: $stateParams.guardianId
        });

        this.relationship = Relationship.get({
            childId: ActiveCache.child.id,
            guardianId: $stateParams.guardianId
        });
        
        this.guardianId = $stateParams.guardianId;
        this.submitLabel = "Επεξεργασία";
        this.typeaheads = typeAheadService;

        ListService.relationshipTypes().then((data) => this.relationshipTypes = data);

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

UpdateGuardianCtrl.$inject = ['$state', '$stateParams', 'ActiveCache', 'Guardian', 'Relationship', 'Address', 'typeAheadService', 'ListService'];
