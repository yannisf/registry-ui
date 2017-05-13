import angular from 'angular';
import NavbarCtrl from './navbar.controller';
import navbarComponent from './navbar.component';

angular.module('schoolApp')
    .controller('NavbarCtrl', NavbarCtrl)
    .component('navbar', navbarComponent());
