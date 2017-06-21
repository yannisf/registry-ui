export default class ConfirmationModalCtrl {

    constructor($uibModalInstance, texts) {
        Object.assign(this, {$uibModalInstance, texts});
    }

    ok() {
        this.$uibModalInstance.close();
    }

    cancel() {
        this.$uibModalInstance.dismiss();
    }

}

ConfirmationModalCtrl.$inject = ['$uibModalInstance', 'texts'];
