function ViewGuardianCtrl($state, $stateParams, ActiveCache, Guardian, Relationship, Address) {

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
    };

    this.cancel = function () {
        $state.go('viewChild', {
            childId: ActiveCache.child.id
        });
    };

}

ViewGuardianCtrl.$inject = ['$state', '$stateParams', 'ActiveCache', 'Guardian', 'Relationship', 'Address'];
