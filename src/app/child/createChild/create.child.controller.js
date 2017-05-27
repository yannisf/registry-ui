export default function CreateChildCtrl($state, uuid4, typeAheadService, ActiveCache, Child, Address) {

    this.$onInit = function () {
        ActiveCache.child = null;
        this.child = new Child({
            id: uuid4.generate()
        });
        this.address = new Address({
            id: uuid4.generate()
        });
        this.submitLabel = 'Εισαγωγή';

        this.typeaheads = typeAheadService;
    };


    this.submit = function () {
        this.address.$save(() => {
            this.child.$save({
                addressId: this.address.id,
                groupId: ActiveCache.group.id
            }, () => {
                ActiveCache.child = this.child;
                $state.go('viewChild', {
                    childId: ActiveCache.child.id
                });
            });
        });
    };

    this.cancel = function () {
        $state.go('group', {
            groupId: ActiveCache.group.id
        });
    };
}

CreateChildCtrl.$inject = ['$state', 'uuid4', 'TypeaheadSvc', 'ActiveCache', 'Child', 'Address'];
