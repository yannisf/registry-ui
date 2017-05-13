import angular from 'angular';
import './viewChild';
import './createChild';
import './updateChild';
import './displayChild';
import './groupList';
import './previousNext';
import './removeRelationshipModal';
import './removeRelationshipModal';


export default angular.module('child', ['ngResource', 'ui.router', 'ui.bootstrap', 'uuid4', 'guardian', 'relationship'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'group',
                url: '/group/:groupId',
                component: 'groupList'
            })
            .state({
                name: 'createChild',
                url: '/child/create',
                component: 'createChild'
            })
            .state({
                name: 'updateChild',
                url: '/child/:childId/update',
                component: 'updateChild'
            })
            .state({
                name: 'viewChild',
                url: '/child/:childId/view',
                component: 'viewChild'
            });
    }])
    .factory('Child', ['$resource', function ($resource) {
        return $resource('api/child/:id', {
            id: '@id'
        }, {
            save: {
                method: 'PUT',
                params: {
                    id: null
                }
            },
        });
    }])
    .name;
