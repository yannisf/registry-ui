import angular from 'angular';
import viewGuardian from './view.guardian.component';
import displayGuardian from '../displayGuardian';

export default angular.module('viewGuardian', [displayGuardian])
    .component('viewGuardian', viewGuardian)
    .name;
