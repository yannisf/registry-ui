import angular from 'angular';
import GroupListCtrl from './group.list.controller';
import groupListComponent from './group.list.component';

export default angular.module('groupList', [])
    .controller('GroupListCtrl', GroupListCtrl)
    .component('groupList', groupListComponent())
    .name;
