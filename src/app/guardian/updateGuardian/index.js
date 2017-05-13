import angular from 'angular';
import UpdateGuardianCtrl from './update.guardian.controller';
import updateGuardianComponent from './update.guardian.component';
import telephones from '../telephones';

export default angular.module('updateGuardian', [telephones])
    .controller('UpdateGuardianCtrl', UpdateGuardianCtrl)
    .component('updateGuardian', updateGuardianComponent())
    .name;
