import angular from 'angular';
import uiMask from 'angular-ui-mask';
import telephones from './telephones.component';

export default angular.module('telephones', [uiMask])
    .component('telephones', telephones)
    .name;
