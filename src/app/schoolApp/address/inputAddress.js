angular.module('schoolApp').component('inputAddress', {
    bindings: {
        address: "=",
        allowCopy: "="
    },
    templateUrl: "app/schoolApp/address/inputAddress.tpl.html",
    controller: ['$rootScope', 'uuid4', 'ActiveCache', 'Address',
        function ($scope, $rootScope, uuid4, ActiveCache, Address) {
            this.typeaheads = $rootScope.typeaheads;

            this.isAddressOpen = false;

            this.clear = function () {
                for (var property in this.address) {
                    if (this.address.hasOwnProperty(property) && !property.startsWith('$')) {
                        if (property !== 'id') {
                            this.address[property] = null;
                        }
                    }
                }
            };

            this.copyFromChild = function () {
                var id = this.address.id;
                this.address = Address.getForPerson({
                    personId: ActiveCache.child.id
                }, function () {
                    this.address.id = id;
                });
            };
        }
    ]
});
