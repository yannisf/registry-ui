export default class CreateChildCtrl {

    constructor($state, $http, uuid4, TypeaheadSvc, ActiveCache, Child, Address) {
        Object.assign(this, {
            $state,
            $http,
            uuid4,
            TypeaheadSvc,
            ActiveCache,
            Child,
            Address
        });
    }

    $onInit() {
        this.ActiveCache.child = null;
        this.child = new this.Child({
            id: this.uuid4.generate()
        });
        this.address = new this.Address({
            id: this.uuid4.generate()
        });
        this.submitLabel = 'Εισαγωγή';

        this.typeaheads = this.TypeaheadSvc;

        this.calendar = {
            open: function () {
                this.opened = true;
            },
            opened: false,
            dateOptions: {
                maxDate: new Date(),
                maxMode: 'month',
                initDate: (function () {
                    let initDate = new Date();
                    initDate.setFullYear(initDate.getFullYear() - 5);
                    return initDate;
                })(),
                startingDay: 1,
                showWeeks: false
            }
        };
    }

    submit() {
        this.address.$save().then(() => {
            return this.child.$save({
                addressId: this.address.id,
                groupId: this.ActiveCache.group.id
            });
        }).then(() => {
            return this.$http.get(`api/overview/group/${this.ActiveCache.group.id}/child`);
        }).then((response) => {
            this.ActiveCache.children = response.data;
            this.ActiveCache.childIds = response.data.map((child) => child.id);
            this.ActiveCache.child = this.child;
            this.$state.go('viewChild', {
                childId: this.ActiveCache.child.id
            });
        });
    }

    cancel() {
        this.$state.go('group', {
            groupId: this.ActiveCache.group.id
        });
    }
}

CreateChildCtrl.$inject = ['$state', '$http', 'uuid4', 'TypeaheadSvc', 'ActiveCache', 'Child', 'Address'];
