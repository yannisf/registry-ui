angular.module('schoolApp').component('telephone', {
    bindings: {
        telephone: "=model"
    },
    template: '{{$ctrl.telephone.number}} <span class="phone-type">{{$ctrl.telephone.type|telephoneTypeFilter}}</span>'
});
