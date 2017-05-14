import angular from 'angular';
import GroupControlCtrl from './group.control.controller';
import groupControlDir from './group.control.directive';

export default angular.module('groupControl', [])
    .controller('GroupControlCtrl', GroupControlCtrl)
    .directive('groupControl', groupControlDir)
    .name;
