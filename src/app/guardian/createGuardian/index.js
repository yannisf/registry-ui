import angular from 'angular';
import CreateGuardianCtrl from './create.guardian.controller';
import createGuardianComponent from './create.guardian.component';

angular.module('guardian')
    .controller('CreateGuardianCtrl', CreateGuardianCtrl)
    .component('createGuardian', createGuardianComponent());
