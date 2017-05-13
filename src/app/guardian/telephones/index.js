import angular from 'angular';
import TelephonesCtrl from './telephones.controller';
import telephonesComponent from './telephones.component';

angular.module('guardian')
    .controller('TelephonesCtrl', TelephonesCtrl)
    .component('telephones', telephonesComponent());
