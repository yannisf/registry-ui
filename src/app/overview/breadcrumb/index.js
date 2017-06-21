import angular from 'angular';
import breadcrumb from './breadcrumb.component';

export default angular.module('breadcrumb', [])
    .component('breadcrumb', breadcrumb)
    .name;
