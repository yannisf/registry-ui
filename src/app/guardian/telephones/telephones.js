angular.module('guardian').component('telephones', {
    bindings: {
        model: "=",
    },
    templateUrl: "app/guardian/telephones/telephones.tpl.html",
    controller: ['uuid4', 'ListService', function (uuid4, ListService) {

        this.$onInit = function() {
            var _self = this;
            ListService.telephoneTypes().then(
                function (data) {
                    _self.telephoneTypes = data;
                }
            );
        }

        this.addTelephone = function () {
            var telephone = {
                id: uuid4.generate()
            };
            this.model.push(telephone);
        };

        this.removeTelephone = function (telephoneIndex) {
            this.model.splice(telephoneIndex, 1);
        };

    }]
});
