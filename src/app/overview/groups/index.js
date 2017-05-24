import angular from 'angular';
import GroupsCtrl from './groups.controller';
import groupsComponent from './groups.component';
import groupControl from './groupControl';

export default angular.module('groups', [groupControl])
    .controller('GroupsCtrl', GroupsCtrl)
    .component('groups', groupsComponent())
    .name;
