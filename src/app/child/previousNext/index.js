import angular from 'angular';
import PreviousNextCtrl from './previous-next.controller';
import previousNextComponent from './previous-next.component';

angular.module('child')
    .controller('PreviousNextCtrl', PreviousNextCtrl)
    .component('previousNext', previousNextComponent());
