import angular from 'angular';
import InputAddressCtrl from './input-address.controller';
import inputAddressComponent from './input-address.component';

angular.module('schoolApp')
    .controller('InputAddressCtrl', InputAddressCtrl)
    .component('inputAddress', inputAddressComponent());
