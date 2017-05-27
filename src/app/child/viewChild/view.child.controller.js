import confimationModalTemplate from './confirmation.modal.tpl.html';

export default function ViewChildCtrl($scope, $stateParams, $state, $uibModal, $http, Upload, Child, Address, Relationship, ActiveCache) {

    this.$onInit = function () {
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
            () => this.hasPhoto = true,
            () => this.hasPhoto = false
        );


        $scope.$watch('$ctrl.file', () => {
            if (this.file) {
                Upload.upload({
                    url: 'api/child/' + $stateParams.childId + '/photo',
                    data: {
                        photo: this.file
                    }
                }).then(() => this.hasPhoto = true);
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

        modal.result.then(() => {
            $http.delete('api/child/' + $stateParams.childId + '/photo').then(() =>
                this.hasPhoto = false
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

        modal.result.then(() => {
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

        modal.result.then(() => {
            relationship.$remove(() => {
                this.relationships = Relationship.query({
                    childId: ActiveCache.child.id
                });
            });
        });

    };
}

ViewChildCtrl.$inject = ['$scope', '$stateParams', '$state', '$uibModal', '$http', 'Upload', 'Child', 'Address', 'Relationship', 'ActiveCache'];
