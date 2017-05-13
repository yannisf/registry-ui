import angular from 'angular';
import SchoolsCtrl from './schools.controller';
import schoolsComponent from './schools.component';

angular.module('overview')
    .controller('SchoolsCtrl', SchoolsCtrl)
    .component('schools', schoolsComponent());
