import angular from 'angular';
import groupList from './group.list.component';

export default angular.module('groupList', [])
    .component('groupList', groupList)
    .name;
