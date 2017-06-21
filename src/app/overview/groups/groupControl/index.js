import angular from 'angular';
import groupControlDir from './group.control.directive';

export default angular.module('groupControl', [])
    .directive('groupControl', groupControlDir)
    .name;
