import angular from 'angular';
import CreateChildCtrl from './create.child.controller';
import createChildComponent from './create.child.component';

export default angular.module('createChild', [])
    .controller('CreateChildCtrl', CreateChildCtrl)
    .component('createChild', createChildComponent())
    .name;
