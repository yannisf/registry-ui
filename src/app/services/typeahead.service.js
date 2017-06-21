const firstNamesEndpoint = 'api/typeahead/firstnames';
const lastNamesEndpoint = 'api/typeahead/lastnames';
const professionsEndpoint = 'api/typeahead/professions';
const nationalitiesEndpoint = 'api/typeahead/nationalities';
const streetnamesEndpoint = 'api/typeahead/streetnames';
const neighbourhoodsEndpoint = 'api/typeahead/neighbourhoods';
const citiesEndpoint = 'api/typeahead/cities';
export default class TypeaheadSvc {

    constructor($http) {
        this._$http = $http;
    }

    getFirstNames(startsWith) {
        return this._getTypeahead(firstNamesEndpoint, startsWith);
    }

     getLastNames(startsWith) {
        return this._getTypeahead(lastNamesEndpoint, startsWith);
    }

    getProfessions(startsWith) {
        return this._getTypeahead(professionsEndpoint, startsWith);
    }

    getNationalities (startsWith) {
        return this._getTypeahead(nationalitiesEndpoint, startsWith);
    }

    getStreetNames(startsWith) {
        return this._getTypeahead(streetnamesEndpoint, startsWith);
    }

    getNeighbourhoods(startsWith) {
        return this._getTypeahead(neighbourhoodsEndpoint, startsWith);
    }

    getCities(startsWith) {
        return this._getTypeahead(citiesEndpoint, startsWith);
    }

    _createParam(startsWith) {
        return {
            params: {
                search: startsWith
            }
        };
    }

    _getTypeahead(endpoint, startsWith) {
        return this._$http.get(endpoint, this._createParam(startsWith))
            .then((response) => response.data);
    }
}

TypeaheadSvc.$inject = ['$http'];
