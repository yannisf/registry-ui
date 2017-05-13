import angular from 'angular';
import UpdateChildCtrl from './update.child.controller';
import updateChildComponent from './update.child.component';

angular.module('child')
    .controller('UpdateChildCtrl', UpdateChildCtrl)
    .component('updateChild', updateChildComponent());
