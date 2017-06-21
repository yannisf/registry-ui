import angular from 'angular';
import departments from './departments.component';
import departmentControl from './departmentControl';

export default angular.module('departments', [departmentControl])
    .component('departments', departments)
    .name;
