import angular from 'angular';

import ngResource from 'angular-resource';
import uiRouter from '@uirouter/angularjs';
import uiBootstrap from 'angular-ui-bootstrap';

export default angular.module('relationship', [
        ngResource,
        uiRouter,
        uiBootstrap
    ])
    .factory('Relationship', ['$resource',
        function ($resource) {
            return $resource('api/relationship/:id', {
                id: '@id'
            }, {
                query: {
                    method: 'GET',
                    url: 'api/relationship/child/:childId',
                    isArray: true
                },
                get: {
                    method: 'GET',
                    url: 'api/relationship/child/:childId/guardian/:guardianId'
                },
                save: {
                    method: 'PUT',
                    url: 'api/relationship/child/:childId/guardian/:guardianId',
                    params: {
                        id: null
                    }
                },
            });
        }
    ])
    .service('RelationshipService', ['Relationship',
        function (Relationship) {
            this.fetchRelationships = function (childId) {
                return Relationship.fetchRelationships({
                    childId: childId
                });
            };
        }
    ])
    .name;
