angular.module('schoolApp').service('ListService', ['$http', function ($http) {

    var cachedRelationalTypes = null;
    var cachedTelephoneTypes = null;

    this.relationshipTypes = function () {
        if (cachedRelationalTypes === null) {
            cachedRelationalTypes = $http.get('api/types/relationship')
                .then((response) => response.data);
        }
        return cachedRelationalTypes;
    };

    this.telephoneTypes = function () {
        if ( cachedTelephoneTypes === null) {
            cachedTelephoneTypes =  $http.get('api/types/telephone')
            .then((response) => response.data);
        }
        return cachedTelephoneTypes;
    };

}]);
