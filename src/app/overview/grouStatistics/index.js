import angular from 'angular';
import GroupStatisticsCtrl from './group.statistics.controller';
import groupStatisticsComponent from './group.statistics.component';

export default angular.module('groupStatistics', [])
    .controller('GroupStatisticsCtrl', GroupStatisticsCtrl)
    .component('groupStatistics', groupStatisticsComponent())
    .name;
