angular.module('schoolApp').factory('Address', ['$resource', function($resource) {
    return $resource('api/address/:id', {id: '@id' }, {
        save: {method: 'PUT', params: {id: null}},
        getForPerson: {method: 'GET', url: 'api/address/person/:personId'}
    });
}]);
