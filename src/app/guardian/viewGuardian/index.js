import angular from 'angular';
import ViewGuardianCtrl from './view.guardian.controller';
import viewGuardianComponent from './view.guardian.component';
import displayGuardian from '../displayGuardian';

export default angular.module('viewGuardian', [displayGuardian])
    .controller('ViewGuardianCtrl', ViewGuardianCtrl)
    .component('viewGuardian', viewGuardianComponent())
    .name;
