import angular from 'angular';
import BreadcrumbCtrl from './breadcrumb.controller';
import breadcrumbComponent from './breadcrumb.component';

angular.module('overview')
    .controller('BreadcrumbCtrl', BreadcrumbCtrl)
    .component('breadcrumb', breadcrumbComponent());
