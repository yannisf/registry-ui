import angular from 'angular';
import navbar from './navbar.component';
import logout from '../logout';

export default angular.module('navbar', [logout])
    .component('navbar', navbar)
    .name;
