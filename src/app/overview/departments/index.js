import angular from 'angular';
import DepartmentsCtrl from './departments.controller';
import departmentsComponent from './departments.component';
import departmentControl from './departmentControl';

export default angular.module('departments', [departmentControl])
    .controller('DepartmentsCtrl', DepartmentsCtrl)
    .component('departments', departmentsComponent())
    .name;
