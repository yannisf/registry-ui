import angular from 'angular';
import NavbarCtrl from './navbar.controller';
import navbarComponent from './navbar.component';

export default angular.module('navbar', [])
    .controller('NavbarCtrl', NavbarCtrl)
    .component('navbar', navbarComponent())
    .name;
