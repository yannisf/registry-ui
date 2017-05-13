import angular from 'angular';
import GroupStatisticsCtrl from './group.statistics.controller';
import groupStatisticsComponent from './group.statistics.component';

angular.module('overview')
    .controller('GroupStatisticsCtrl', GroupStatisticsCtrl)
    .component('groupStatistics', groupStatisticsComponent());
