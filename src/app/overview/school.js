angular.module('overview').factory('School', ['$resource',
    function($resource) {
        return $resource('api/overview/school/:id', {id: '@id'}, {
            save: {method: 'PUT', params: {id: null} },
        });
    }
]);
