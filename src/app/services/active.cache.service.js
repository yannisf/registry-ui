class ActiveCacheSvc {

    constructor($http, $q) {
        this._$http = $http;
        this._$q = $q;
        this.school = null;
        this.department = null;
        this.group = null;
        this.child = null;
        this.children = null;
        this.childIds = null;
    }

    resolveGroup(groupId) {
        if (this.group && this.group.id === groupId) {
            return this._$q((resolve) => resolve());
        } else {
            this.clearSchool();
            return this._$http.get(`api/overview/group/${groupId}/info`)
                .then((response) => {
                    this.school = response.data.school;
                    this.department = response.data.department;
                    this.group = response.data.group;
                });
        }
    }

    clearChild() {
        this.child = null;
    }

    clearGroup() {
        this.clearChild();
        this.children = null;
        this.childIds = null;
        this.group = null;
    }

    clearDepartment() {
        this.clearGroup();
        this.department = null;
    }

    clearSchool() {
        this.clearDepartment();
        this.school = null;
    }

    getChildName() {
        if (this.child) {
            let name = this.child.firstName ? this.child.firstName + ' ' : '';
            if (this.child.callName) {
                name += `(${this.child.callName}) `;
            }
            name = (name + ' ' + (this.child.lastName ? this.child.lastName + ' ': '')).trim();
            if (name.length === 0) {
                name = null;
            }
            return name;
        }
    }

}

ActiveCacheSvc.$inject = ['$http', '$q'];

export default ActiveCacheSvc;
