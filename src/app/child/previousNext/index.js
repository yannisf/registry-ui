import angular from 'angular';
import PreviousNextCtrl from './previous-next.controller';
import previousNextComponent from './previous-next.component';

export default angular.module('previousNext', [])
    .controller('PreviousNextCtrl', PreviousNextCtrl)
    .component('previousNext', previousNextComponent())
    .name;
