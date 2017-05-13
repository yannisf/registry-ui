import angular from 'angular';
import SchoolControlCtrl from './school.control.controller';
import schoolControlDir from './school.control.directive';

export default angular.module('schoolControl', [])
	.controller('SchoolControlCtrl', SchoolControlCtrl)
	.directive('schoolControl', schoolControlDir)
	.name;
