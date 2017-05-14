import angular from 'angular';
import DisplayGuardianCtrl from './display.guardian.controller';
import displayGuardianComponent from './display.guardian.component';

export default angular.module('displayGuardian', [])
    .controller('DisplayGuardianCtrl', DisplayGuardianCtrl)
    .component('displayGuardian', displayGuardianComponent())
    .name;
