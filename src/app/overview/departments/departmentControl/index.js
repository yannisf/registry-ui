import angular from 'angular';
import DepartmentControlCtrl from './department.control.controller';
import departmentControlDir from './department.control.directive';

export default angular.module('departmentControl', [])
	.controller('DepartmentControlCtrl', DepartmentControlCtrl)
	.directive('departmentControl', departmentControlDir)
	.name;
