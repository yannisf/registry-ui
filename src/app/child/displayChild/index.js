import angular from 'angular';
import DisplayChildCtrl from './display.child.controller';
import displayChildComponent from './display.child.component';

export default angular.module('displayChild', [])
    .controller('DisplayChildCtrl', DisplayChildCtrl)
    .component('displayChild', displayChildComponent())
    .name;
