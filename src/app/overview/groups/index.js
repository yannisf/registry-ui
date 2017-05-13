import angular from 'angular';
import GroupsCtrl from './groups.controller';
import groupsComponent from './groups.component';

angular.module('overview')
    .controller('GroupsCtrl', GroupsCtrl)
    .component('groups', groupsComponent());
