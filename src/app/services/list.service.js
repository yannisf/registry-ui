const RELATIONSHIP_TYPE_ENDPOINT = 'api/types/relationship';
const TELEPHONE_TYPE_ENDPOINT = 'api/types/telephone';

export default class ListSvc {

    constructor($http) {
        this._$http = $http;
        this._cachedRelationalTypes = null;
        this._cachedTelephoneTypes = null;
    }

    relationshipTypes() {
        if (this._cachedRelationalTypes === null) {
            this._cachedRelationalTypes = this._$http.get(RELATIONSHIP_TYPE_ENDPOINT)
                .then((response) => response.data);
        }
        return this._cachedRelationalTypes;
    }

    telephoneTypes() {
        if (this._cachedTelephoneTypes === null) {
            this._cachedTelephoneTypes = this._$http.get(TELEPHONE_TYPE_ENDPOINT)
                .then((response) => response.data);
        }
        return this._cachedTelephoneTypes;
    }

}

ListSvc.$inject = ['$http'];
