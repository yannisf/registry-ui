import angular from 'angular';
import TelephonesCtrl from './telephones.controller';
import telephonesComponent from './telephones.component';

export default angular.module('telephones', [])
    .controller('TelephonesCtrl', TelephonesCtrl)
    .component('telephones', telephonesComponent())
    .name;
