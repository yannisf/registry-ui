import angular from 'angular';
import DisplayChildCtrl from './display.child.controller';
import displayChildComponent from './display.child.component';

angular.module('child')
    .controller('DisplayChildCtrl', DisplayChildCtrl)
    .component('displayChild', displayChildComponent());
