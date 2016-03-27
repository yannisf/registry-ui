angular.module('relationship').factory('Relationship', ['$resource',
    function($resource) {
        return $resource('api/relationship/:id', {id: '@id'}, {
            query: {method:'GET', url:'api/relationship/child/:childId', isArray: true},
            get: {method:'GET', url:'api/relationship/child/:childId/guardian/:guardianId'},
            save: {method: 'PUT', url: 'api/relationship/child/:childId/guardian/:guardianId', params: {id: null} },
        });
    }
]);