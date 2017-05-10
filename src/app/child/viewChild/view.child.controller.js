function ViewChildCtrl($stateParams, $state, $uibModal, Child, Address, Relationship, ActiveCache) {

    this.$onInit = function () {
        // console.log('Initializing ViewChildCtrl', this);
        this.child = Child.get({
                id: $stateParams.childId
            },
            (response) => {
                ActiveCache.child = response;
            });
        this.address = Address.getForPerson({
            personId: $stateParams.childId
        });
        this.relationships = Relationship.query({
            childId: $stateParams.childId
        });
        this.submitLabel = 'Επεξεργασία';
        this.hasChildrenIdsInScope = ActiveCache.childIds.length > 1;
    };

    this.getChildName = function() {
        return ActiveCache.getChildName();
    }

    this.addGuardian = function () {
        $state.go('createGuardian')
    };

    this.goToGuardian = function ($event) {
        let clickedElement = angular.element($event.target);
        let guardianId = clickedElement.scope().relationship.guardian.id;
        $event.stopPropagation();
        $state.go('viewGuardian', {
            guardianId: guardianId
        });
    };

    this.confirmRemoveChild = function () {
        $uibModal.open({
            templateUrl: 'app/child/removeChildModal/removeChildModal.tpl.html',
            controller: 'removeChildModalController',
            resolve: {
                child: () => {
                    return this.child;
                }
            }
        });
    };

    this.confirmRemoveRelationship = function (relationship, $event) {
        $event.stopPropagation();
        $uibModal.open({
            templateUrl: 'app/child/removeRelationshipModal/removeRelationshipModal.tpl.html',
            controller: 'removeRelationshipModalController',
            resolve: {
                relationship: () => {
                    return relationship;
                },
                viewChildCtrl: () => {
                    return this;
                }
            }
        });
    };
}

ViewChildCtrl.$inject = ['$stateParams', '$state', '$uibModal', 'Child', 'Address', 'Relationship', 'ActiveCache']
