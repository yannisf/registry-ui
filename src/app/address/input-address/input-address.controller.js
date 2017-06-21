export default class InputAddressCtrl {

    constructor(typeAheadService, ActiveCache, Address) {
        Object.assign(this, {ActiveCache, Address});
        this.typeaheads = typeAheadService;
    }

    $onInit() {
        this.isAddressOpen = false;
    }

    clear() {
        for (var property in this.address) {
            if (this.address.hasOwnProperty(property) && !property.startsWith('$')) {
                if (property !== 'id') {
                    this.address[property] = null;
                }
            }
        }
    }

    copyFromChild() {
        let id = this.address.id;
        this.address = this.Address.getForPerson({
            personId: this.ActiveCache.child.id
        }, () => {
            this.address.id = id;
        });
    }

}

InputAddressCtrl.$inject = ['TypeaheadSvc', 'ActiveCache', 'Address'];
