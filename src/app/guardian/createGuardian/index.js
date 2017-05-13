import angular from 'angular';
import CreateGuardianCtrl from './create.guardian.controller';
import createGuardianComponent from './create.guardian.component';
import telephones from '../telephones';

export default angular.module('createGuardian', [telephones])
    .controller('CreateGuardianCtrl', CreateGuardianCtrl)
    .component('createGuardian', createGuardianComponent())
    .name;
