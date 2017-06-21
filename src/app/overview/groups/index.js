import angular from 'angular';
import groups from './groups.component';
import groupControl from './groupControl';

export default angular.module('groups', [groupControl])
    .component('groups', groups)
    .name;
