import angular from 'angular';
import DepartmentControlCtrl from './department.control.controller';
import departmentControlDir from './department.control.directive';

angular.module('overview')
	.controller('DepartmentControlCtrl', DepartmentControlCtrl)
	.directive('departmentControl', departmentControlDir);
