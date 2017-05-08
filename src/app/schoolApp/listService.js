angular.module('schoolApp').service('ListService', ['$http', function ($http) {

    this.relationshipTypes = function () {
        return $http.get('api/types/relationship').then((response) => response.data);
    };

    this.telephoneTypes = function () {
        return $http.get('api/types/telephone').then((response) => response.data);
    };

}]);
