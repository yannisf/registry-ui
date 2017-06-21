import angular from 'angular';
import createGuardian from './create.guardian.component';
import telephones from '../telephones';

export default angular.module('createGuardian', [telephones])
    .component('createGuardian', createGuardian)
    .name;
