function RemoveRelationshipModalCtrl($scope, $uibModalInstance, ActiveCache, Relationship, relationship, viewChildCtrl) {

    this.removeRelationship = function () {
        relationship.$remove(() => {
            viewChildCtrl.relationships = Relationship.query({
                childId: ActiveCache.child.id
            }, () => {
                $uibModalInstance.dismiss();
            });
        });
    };

    this.dismiss = function () {
        $uibModalInstance.dismiss();
    };
}

RemoveRelationshipModalCtrl.$inject = ['$uibModalInstance', 'ActiveCache', 'Relationship', 'relationship', 'viewChildCtrl'];
