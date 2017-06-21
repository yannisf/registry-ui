import angular from 'angular';
import createChild from './create.child.component';

export default angular.module('createChild', [])
    .component('createChild', createChild)
    .name;
