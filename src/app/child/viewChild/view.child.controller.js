import confimationModalTemplate from './confirmation.modal.tpl.html';
import ConfirmationModalCtrl from './confirmation.modal.controller';

export default class ViewChildCtrl {

    constructor($scope, $stateParams, $state, $uibModal, $http, Upload, Child, Address, Relationship, ActiveCache) {
        Object.assign(this, {
            $scope,
            $stateParams,
            $state,
            $uibModal,
            $http,
            Upload,
            Child,
            Address,
            Relationship,
            ActiveCache
        });
    }

    $onInit() {
        this.child = this.Child.get({
                id: this.$stateParams.childId
            },
            (response) => {
                this.ActiveCache.child = response;
            });
        this.address = this.Address.getForPerson({
            personId: this.$stateParams.childId
        });
        this.relationships = this.Relationship.query({
            childId: this.$stateParams.childId
        });
        this.submitLabel = 'Επεξεργασία';
        this.hasChildrenIdsInScope = this.ActiveCache.childIds.length > 1;

        this.$scope.$watch('$ctrl.file', () => {
            if (this.file) {
                this.Upload.upload({
                    url: `api/child/${this.$stateParams.childId}/photo`,
                    data: {
                        photo: this.file
                    }
                }).then((response) => {
                    let location = response.headers('Location');
                    this.child.photoId = location.substr(location.lastIndexOf('/') + 1);
                });
            }
        });

    }

    getChildName() {
        return this.ActiveCache.getChildName();
    }

    confirmRemovePhoto() {
        let modal = this.$uibModal.open({
            template: confimationModalTemplate,
            controller: ConfirmationModalCtrl,
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
            this.$http.delete(`api/child/${this.$stateParams.childId}/photo`).then(() =>
                this.child.photoId = null
            );
        });
    }

    confirmRemoveChild() {
        let modal = this.$uibModal.open({
            template: confimationModalTemplate,
            controller: ConfirmationModalCtrl,
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
                this.ActiveCache.child = null;
                this.$state.go('group', {
                    groupId: this.ActiveCache.group.id
                });
            });
        });
    }

    confirmRemoveRelationship(relationship) {
        let modal = this.$uibModal.open({
            template: confimationModalTemplate,
            controller: ConfirmationModalCtrl,
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
                this.relationships = this.Relationship.query({
                    childId: this.ActiveCache.child.id
                });
            });
        });

    }
}

ViewChildCtrl.$inject = ['$scope', '$stateParams', '$state', '$uibModal', '$http', 'Upload', 'Child', 'Address', 'Relationship', 'ActiveCache'];
