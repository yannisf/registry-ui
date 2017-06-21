import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import viewChild from './view.child.component';
import previousNext from '../previousNext';
import displayChild from '../displayChild';

export default angular.module('viewChild', [uiBootstrap, previousNext, displayChild])
    .component('viewChild', viewChild)
    .name;
