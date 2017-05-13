import angular from 'angular';
import ViewChildCtrl from './view.child.controller';
import viewChildComponent from './view.child.component';

angular.module('child')
    .controller('ViewChildCtrl', ViewChildCtrl)
    .component('viewChild', viewChildComponent());
