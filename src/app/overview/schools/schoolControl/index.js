import angular from 'angular';
import schoolControlDir from './school.control.directive';

export default angular.module('schoolControl', [])
	.directive('schoolControl', schoolControlDir)
	.name;
