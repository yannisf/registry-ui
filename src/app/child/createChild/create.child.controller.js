export default function CreateChildCtrl($state, $http, uuid4, TypeaheadSvc, ActiveCache, Child, Address) {

    this.$onInit = function () {
        ActiveCache.child = null;
        this.child = new Child({
            id: uuid4.generate()
        });
        this.address = new Address({
            id: uuid4.generate()
        });
        this.submitLabel = 'Εισαγωγή';

        this.typeaheads = TypeaheadSvc;

        this.calendar = {
            open: function() {
                this.opened = true;
            },
            opened: false,
            dateOptions: {
                maxDate: new Date(),
                maxMode: 'month',
                initDate: (function() {
                    let initDate = new Date();
                    initDate.setFullYear(initDate.getFullYear() - 5);
                    return initDate;
                })(),
                startingDay: 1,
                showWeeks: false
            }
        };

    };

    this.submit = function () {
        this.address.$save().then(() => {
            return this.child.$save({
                addressId: this.address.id,
                groupId: ActiveCache.group.id
            });
        }).then(() => {
            return $http.get(`api/overview/group/${ActiveCache.group.id}/child`);
        }).then((response) => {
            ActiveCache.children = response.data;
            ActiveCache.childIds = response.data.map((child) => child.id);
            ActiveCache.child = this.child;
            $state.go('viewChild', {
                childId: ActiveCache.child.id
            });
        });
    };

    this.cancel = function () {
        $state.go('group', {
            groupId: ActiveCache.group.id
        });
    };
}

CreateChildCtrl.$inject = ['$state', '$http', 'uuid4', 'TypeaheadSvc', 'ActiveCache', 'Child', 'Address'];
