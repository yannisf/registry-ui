export default class ViewGuardianCtrl {

    constructor($state, $stateParams, ActiveCache, Guardian, Relationship, Address) {
        Object.assign(this, {
            $state,
            $stateParams,
            ActiveCache,
            Guardian,
            Relationship,
            Address
        })
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
    }

    cancel() {
        this.$state.go('viewChild', {
            childId: this.ActiveCache.child.id
        });
    }

}

ViewGuardianCtrl.$inject = ['$state', '$stateParams', 'ActiveCache', 'Guardian', 'Relationship', 'Address'];
