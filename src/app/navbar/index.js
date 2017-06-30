import angular from 'angular';
import navbar from './navbar.component';

export default angular.module('navbar', [])
    .component('navbar', navbar)
    .name;
