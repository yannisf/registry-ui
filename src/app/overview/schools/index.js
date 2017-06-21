import angular from 'angular';
import schools from './schools.component';
import schoolControl from './schoolControl';

export default angular.module('schools', [schoolControl])
    .component('schools', schools)
    .name;
