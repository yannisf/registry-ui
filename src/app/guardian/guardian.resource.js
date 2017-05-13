export default angular.module('guardian').factory('Guardian', ['$resource',
    function ($resource) {
        return $resource('api/guardian/:id', {id: '@id' }, {
        	save: {method: 'PUT', params: {id: null} },
        });
    }
]);
