import angular from 'angular';
import uiMask from 'angular-ui-mask';
import TelephonesCtrl from './telephones.controller';
import telephonesComponent from './telephones.component';

export default angular.module('telephones', [uiMask])
    .controller('TelephonesCtrl', TelephonesCtrl)
    .component('telephones', telephonesComponent())
    .name;
