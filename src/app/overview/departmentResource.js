angular.module('overview').factory('Department', ['$resource',
    function($resource) {
        return $resource('api/overview/department/:id', {id: '@id'}, {
            query: {method: 'GET', url: 'api/overview/department', isArray: true},
            save: {method: 'PUT', params: {id: null} },
        });
    }
]);
