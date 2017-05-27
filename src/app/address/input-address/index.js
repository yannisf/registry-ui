import angular from 'angular';
import InputAddressCtrl from './input-address.controller';
import inputAddressComponent from './input-address.component';

export default angular.module('input-address', [])
    .controller('InputAddressCtrl', InputAddressCtrl)
    .component('inputAddress', inputAddressComponent())
    .name;
