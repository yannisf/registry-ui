import angular from 'angular';
import updateGuardian from './update.guardian.component';
import telephones from '../telephones';

export default angular.module('updateGuardian', [telephones])
    .component('updateGuardian', updateGuardian)
    .name;
