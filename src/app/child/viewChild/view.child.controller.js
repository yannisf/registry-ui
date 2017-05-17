import removeChildModalTemplate from './remove.child.modal.controller.tpl.html';
import removeRelationshipModalTemplate from './remove.relationship.modal.controller.tpl.html';

export default function ViewChildCtrl($scope, $stateParams, $state, $uibModal, $http, Upload, Child, Address, Relationship, ActiveCache) {

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

        this.hasPhoto = false;
        $http.head('api/child/' + $stateParams.childId + '/photo').then(
            (response) => this.hasPhoto = true,
            (error) => this.hasPhoto = false
        );


        console.log('Defining watch')
        $scope.$watch('$ctrl.file', () => {
            console.log('Into watch');
            if (this.file) {
                console.log('Watch invoked');
                Upload.upload({
                    url: 'api/child/' + $stateParams.childId + '/photo',
                    data: {
                        photo: this.file
                    }
                }).then(
                    (response) => this.hasPhoto = true
                );
            }
        });

    };

    this.getChildName = function () {
        return ActiveCache.getChildName();
    }

    this.removePhoto = function () {
        $http.delete('api/child/' + $stateParams.childId + '/photo')
            .then(
                (response) => this.hasPhoto = false
            );
    }

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

    this.confirmRemoveRelationship = function (relationship) {
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

ViewChildCtrl.$inject = ['$scope', '$stateParams', '$state', '$uibModal', '$http', 'Upload', 'Child', 'Address', 'Relationship', 'ActiveCache']
