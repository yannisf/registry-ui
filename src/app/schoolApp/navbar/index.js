import angular from 'angular';
import NavbarCtrl from './navbar.controller';
import navbarComponent from './navbar.component';
import logout from '../logout';

export default angular.module('navbar', [logout])
    .controller('NavbarCtrl', NavbarCtrl)
    .component('navbar', navbarComponent())
    .name;
