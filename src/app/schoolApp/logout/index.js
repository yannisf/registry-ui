import angular from 'angular';
import LogoutCtrl from './logout.controller';
import logoutComponent from './logout.component';

export default angular.module('logout', [])
    .controller('LogoutCtrl', LogoutCtrl)
    .component('logout', logoutComponent())
    .name;
