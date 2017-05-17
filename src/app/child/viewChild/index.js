import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import ViewChildCtrl from './view.child.controller';
import viewChildComponent from './view.child.component';
import previousNext from '../previousNext';
import displayChild from '../displayChild';
import ConfirmationModalCtrl from './confirmation.modal.controller';

export default angular.module('viewChild', [uiBootstrap, previousNext, displayChild])
    .controller('ViewChildCtrl', ViewChildCtrl)
    .component('viewChild', viewChildComponent())
    .controller('ConfirmationModalCtrl', ConfirmationModalCtrl)
    .name;
