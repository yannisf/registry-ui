import angular from 'angular';
import SchoolsCtrl from './schools.controller';
import schoolsComponent from './schools.component';
import schoolControl from './schoolControl';

export default angular.module('schools', [schoolControl])
    .controller('SchoolsCtrl', SchoolsCtrl)
    .component('schools', schoolsComponent())
    .name;
