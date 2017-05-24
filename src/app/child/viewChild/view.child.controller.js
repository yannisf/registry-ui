import confimationModalTemplate from './confirmation.modal.tpl.html';

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


        console.log('Defining watch');
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
    };

    this.confirmRemovePhoto = function () {
        let modal = $uibModal.open({
            template: confimationModalTemplate,
            controller: 'ConfirmationModalCtrl',
            bindToController: true,
            controllerAs: '$ctrl',
            resolve: {
                texts: function () {
                    return {
                        title: 'Διαγραφή φωτογραφίας παιδιού',
                        content: 'Επιθυμείτε τη διαγραφή της φωτογραφίας του παιδιού;',
                        ok: 'Ναι',
                        cancel: 'Όχι'
                    };
                }
            }
        });

        modal.result.then(
            (success) => {
                $http.delete('api/child/' + $stateParams.childId + '/photo').then(
                    (response) => this.hasPhoto = false
                );
            });
    };


    this.confirmRemoveChild = function () {
        let modal = $uibModal.open({
            template: confimationModalTemplate,
            controller: 'ConfirmationModalCtrl',
            bindToController: true,
            controllerAs: '$ctrl',
            resolve: {
                texts: function () {
                    return {
                        title: 'Διαγραφή παιδιού',
                        content: 'Επιθυμείτε τη διαγραφή του παιδιού από το κατάλογο;',
                        ok: 'Ναι',
                        cancel: 'Όχι'
                    };
                }
            }
        });

        modal.result.then(
            (success) => {
                this.child.$remove(() => {
                    ActiveCache.child = null;
                    $state.go('group', {
                        groupId: ActiveCache.group.id
                    });
                });
            });
    };

    this.confirmRemoveRelationship = function (relationship) {
        let modal = $uibModal.open({
            template: confimationModalTemplate,
            controller: 'ConfirmationModalCtrl',
            bindToController: true,
            controllerAs: '$ctrl',
            resolve: {
                texts: function () {
                    return {
                        title: 'Διαγραφή σχέσης',
                        content: 'Επιθυμείτε τη διαγραφή αυτής της σχέσης;',
                        ok: 'Ναι',
                        cancel: 'Όχι'
                    };
                }
            }
        });

        modal.result.then(
            (success) => {
                relationship.$remove(() => {
                    this.relationships = Relationship.query({
                        childId: ActiveCache.child.id
                    });
                });
            });

    };
}

ViewChildCtrl.$inject = ['$scope', '$stateParams', '$state', '$uibModal', '$http', 'Upload', 'Child', 'Address', 'Relationship', 'ActiveCache'];
