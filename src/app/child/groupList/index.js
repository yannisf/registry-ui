import angular from 'angular';
import GroupListCtrl from './group.list.controller';
import groupListComponent from './group.list.component';

angular.module('child')
    .controller('GroupListCtrl', GroupListCtrl)
    .component('groupList', groupListComponent());
