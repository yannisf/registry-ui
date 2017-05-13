import angular from 'angular';
import UpdateGuardianCtrl from './update.guardian.controller';
import updateGuardianComponent from './update.guardian.component';

angular.module('guardian')
    .controller('UpdateGuardianCtrl', UpdateGuardianCtrl)
    .component('updateGuardian', updateGuardianComponent());
