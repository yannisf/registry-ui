import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import ViewChildCtrl from './view.child.controller';
import viewChildComponent from './view.child.component';
import RemoveChildModalCtrl from './remove.child.modal.controller';
import RemoveRelationshipModalCtrl from './remove.relationship.modal.controller';
import previousNext from '../previousNext';
import displayChild from '../displayChild';

export default angular.module('viewChild', [uiBootstrap, previousNext, displayChild])
    .controller('ViewChildCtrl', ViewChildCtrl)
    .component('viewChild', viewChildComponent())
    .controller('RemoveChildModalCtrl', RemoveChildModalCtrl)
    .controller('RemoveRelationshipModalCtrl', RemoveRelationshipModalCtrl)
    .name;
