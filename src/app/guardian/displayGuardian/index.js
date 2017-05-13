import angular from 'angular';
import displayGuardianComponent from './display.guardian.component';

export default angular.module('displayGuardian', [])
    .component('displayGuardian', displayGuardianComponent())
    .name;
