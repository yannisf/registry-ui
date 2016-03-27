(function () {
    'use strict';

    angular.module('child').factory('Child', ['$resource',

        function($resource) {
            return $resource('api/child/:id', {id: '@id' }, {
                save: {method: 'PUT', params: {id: null} },
            });
        }
    ]);

}());