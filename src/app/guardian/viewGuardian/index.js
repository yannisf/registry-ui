import angular from 'angular';
import ViewGuardianCtrl from './view.guardian.controller';
import viewGuardianComponent from './view.guardian.component';

angular.module('guardian')
    .controller('ViewGuardianCtrl', ViewGuardianCtrl)
    .component('viewGuardian', viewGuardianComponent());
