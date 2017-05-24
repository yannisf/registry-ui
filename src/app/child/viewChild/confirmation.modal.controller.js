export default function RemoveRelationshipModalCtrl($uibModalInstance, texts) {

    this.texts = texts;

    this.ok = function() {
        $uibModalInstance.close();
    };

    this.cancel = function() {
        $uibModalInstance.dismiss();
    };

}

RemoveRelationshipModalCtrl.$inject = ['$uibModalInstance', 'texts'];
