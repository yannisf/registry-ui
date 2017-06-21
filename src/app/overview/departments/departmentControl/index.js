import angular from 'angular';
import departmentControlDir from './department.control.directive';

export default angular.module('departmentControl', [])
	.directive('departmentControl', departmentControlDir)
	.name;
