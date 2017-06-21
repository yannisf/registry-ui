import angular from 'angular';
import updateChild from './update.child.component';

export default angular.module('updateChild', [])
    .component('updateChild', updateChild)
    .name;
