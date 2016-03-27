angular.module('overview').factory('Group', ['$resource',
    function($resource) {
        return $resource('api/overview/group/:id', {id: '@id'}, {
            query: {method: 'GET', url: 'api/overview/group', isArray: true},
            save: {method: 'PUT', params: {id: null} },
            children: {method: 'GET', url: 'api/overview/group/:id/child', isArray: true},
            statistics: {method: 'GET', url: 'api/overview/group/:id/statistics'},
        });
    }
]);
