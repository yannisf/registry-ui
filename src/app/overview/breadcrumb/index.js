import angular from 'angular';
import BreadcrumbCtrl from './breadcrumb.controller';
import breadcrumbComponent from './breadcrumb.component';

export default angular.module('breadcrumb', [])
    .controller('BreadcrumbCtrl', BreadcrumbCtrl)
    .component('breadcrumb', breadcrumbComponent())
    .name;
