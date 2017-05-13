import angular from 'angular';
import DepartmentsCtrl from './departments.controller';
import departmentsComponent from './departments.component';

angular.module('overview')
    .controller('DepartmentsCtrl', DepartmentsCtrl)
    .component('departments', departmentsComponent());
