import angular from 'angular';
import SchoolControlCtrl from './school.control.controller';
import schoolControlDir from './school.control.directive';

angular.module('schoolControl', [])
	.controller('SchoolControlCtrl', SchoolControlCtrl)
	.directive('schoolControl', schoolControlDir);
