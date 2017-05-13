import removeChildModalTemplate from './remove.child.modal.controller.tpl.html';
import removeRelationshipModalTemplate from './remove.relationship.modal.controller.tpl.html';

export default function ViewChildCtrl($stateParams, $state, $uibModal, Child, Address, Relationship, ActiveCache) {

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

    this.getChildName = function () {
        return ActiveCache.getChildName();
    }

    this.addGuardian = function () {
        $state.go('createGuardian')
    };

    this.confirmRemoveChild = function () {
        $uibModal.open({
            template: removeChildModalTemplate,
            controller: 'RemoveChildModalCtrl',
            bindToController: true,
            controllerAs: '$ctrl',
            resolve: {
                child: () => this.child
            }
        });
    };

    this.confirmRemoveRelationship = function (relationship, $event) {
        $event.stopPropagation();
        $uibModal.open({
            template: removeRelationshipModalTemplate,
            controller: 'RemoveRelationshipModalCtrl',
            bindToController: true,
            controllerAs: '$ctrl',
            resolve: {
                relationship: () => relationship,
                viewChildCtrl: () => this
            }
        });
    };
}

ViewChildCtrl.$inject = ['$stateParams', '$state', '$uibModal', 'Child', 'Address', 'Relationship', 'ActiveCache']
