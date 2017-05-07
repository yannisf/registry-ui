angular.module('guardian').component('telephones', {
    bindings: {
        model: "=",
    },
    templateUrl: "app/guardian/telephones/telephones.tpl.html",
    controller: ['uuid4', 'ListService', function (uuid4, ListService) {

        this.$onInit = function() {
            ListService.telephoneTypes().then((data) => {
                    this.telephoneTypes = data;
                }
            );
        }

        this.addTelephone = function () {
            let telephone = {
                id: uuid4.generate()
            };
            this.model.push(telephone);
        };

        this.removeTelephone = function (telephoneIndex) {
            this.model.splice(telephoneIndex, 1);
        };

    }]
});
