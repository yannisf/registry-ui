import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from '@uirouter/angularjs';
import uiBootstrap from 'angular-ui-bootstrap';
import viewGuardian from './viewGuardian';
import createGuardian from './createGuardian';
import updateGuardian from './updateGuardian';
import relationship from '../relationship';
import 'angular-uuid4';

export default angular.module('guardian', [
        ngResource,
        uiRouter,
        uiBootstrap,
        'uuid4',
        viewGuardian,
        createGuardian,
        updateGuardian,
        relationship
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'createGuardian',
                url: '/guardian/create',
                component: 'createGuardian'
            })
            .state({
                name: 'updateGuardian',
                url: '/guardian/:guardianId/edit',
                component: 'updateGuardian'
            })
            .state({
                name: 'viewGuardian',
                url: '/guardian/:guardianId/view',
                component: 'viewGuardian'
            })
    }])
    .factory('Guardian', ['$resource',
        function ($resource) {
            return $resource('api/guardian/:id', {
                id: '@id'
            }, {
                save: {
                    method: 'PUT',
                    params: {
                        id: null
                    }
                },
            });
        }
    ])
    .filter('telephoneNumber', [function () {
        const pattern = /(\d{3})(\d{2})(\d{2})(\d{3})/;
        return function (number) {
            if (number) {
                return number.replace(pattern, '$1 $2 $3 $4');
            }
        };
    }])
    .name;
