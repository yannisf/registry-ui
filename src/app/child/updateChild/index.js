import angular from 'angular';
import UpdateChildCtrl from './update.child.controller';
import updateChildComponent from './update.child.component';

export default angular.module('updateChild', [])
    .controller('UpdateChildCtrl', UpdateChildCtrl)
    .component('updateChild', updateChildComponent())
    .name;
