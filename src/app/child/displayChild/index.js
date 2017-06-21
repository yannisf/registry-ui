import angular from 'angular';
import displayChild from './display.child.component';

export default angular.module('displayChild', [])
    .component('displayChild', displayChild)
    .name;
