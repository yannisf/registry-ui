function TypeaheadSvc($http) {

    const firstNamesEndpoint = 'api/typeahead/firstnames';
    const lastNamesEndpoint = 'api/typeahead/lastnames';
    const professionsEndpoint = 'api/typeahead/professions';
    const nationalitiesEndpoint = 'api/typeahead/nationalities';
    const streetnamesEndpoint = 'api/typeahead/streetnames';
    const neighbourhoodsEndpoint = 'api/typeahead/neighbourhoods';
    const citiesEndpoint = 'api/typeahead/cities';

    this.getFirstNames = function (startsWith) {
        return getTypeahead(firstNamesEndpoint, startsWith);
    }

    this.getLastNames = function (startsWith) {
        return getTypeahead(lastNamesEndpoint, startsWith);
    }

    this.getProfessions = function (startsWith) {
        return getTypeahead(professionsEndpoint, startsWith);
    }

    this.getNationalities = function (startsWith) {
        return getTypeahead(nationalitiesEndpoint, startsWith);
    }

    this.getStreetNames = function (startsWith) {
        return getTypeahead(streetnamesEndpoint, startsWith);
    }

    this.getNeighbourhoods = function (startsWith) {
        return getTypeahead(neighbourhoodsEndpoint, startsWith);
    }

    this.getCities = function (startsWith) {
        return getTypeahead(citiesEndpoint, startsWith);
    }

    function createParam(startsWith) {
        return {
            params: {
                search: startsWith
            }
        }
    }

    function getTypeahead(endpoint, startsWith) {
        return $http.get(endpoint, createParam(startsWith))
            .then((response) => response.data);
    }
}

TypeaheadSvc.$inject = ['$http'];
