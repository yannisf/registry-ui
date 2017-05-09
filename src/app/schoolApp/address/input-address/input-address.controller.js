function InputAddressCtrl(typeAheadService, ActiveCache, Address) {

    this.$onInit = function () {
        this.typeaheads = typeAheadService;
        this.isAddressOpen = false;
    };

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

InputAddressCtrl.$inject = ['typeAheadService', 'ActiveCache', 'Address'];
