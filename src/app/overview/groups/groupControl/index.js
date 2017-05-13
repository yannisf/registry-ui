import angular from 'angular';
import GroupControlCtrl from './group.control.controller';
import groupControlDir from './group.control.directive';

angular.module('overview')
    .controller('GroupControlCtrl', GroupControlCtrl)
    .directive('groupControl', groupControlDir);
