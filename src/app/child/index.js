import angular from 'angular';

import ngResource from 'angular-resource';
import uiRouter from '@uirouter/angularjs';
import uiBootstrap from 'angular-ui-bootstrap';
import groupList from './groupList';
import viewChild from './viewChild';
import createChild from './createChild';
import updateChild from './updateChild';
import relationship from '../relationship';
import guardian from '../guardian';
import ngFileUpload from 'ng-file-upload';
import 'angular-uuid4';

export default angular.module('child', [
        ngResource,
        uiRouter,
        uiBootstrap,
        'uuid4',
        groupList,
        viewChild,
        createChild,
        updateChild,
        relationship,
        guardian,
        ngFileUpload
    ])
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
