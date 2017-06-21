import angular from 'angular';
import groupStatistics from './group.statistics.component';

export default angular.module('groupStatistics', [])
    .component('groupStatistics', groupStatistics)
    .name;
