'use strict';

angular.module('myApp.datagrid', ['ui.router', 'underscore'])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('datagrid', {
        url: '/datagrid',
        templateUrl: 'datagrid/datagrid.html',
        controller: 'datagridCtrl'
    })
}])

.controller('datagridCtrl', ['$scope', '_', 'dataServices', function ($scope, _, dataServices) {


    $scope.addItem = function () {
        

        dataServices.addData();
       
        loadGridData();

    }

    function loadGridData() {
        $scope.gridData = dataServices.gridData;
    }

    $scope.deleteItem = function (item) {
        dataServices.deleteItem(item);
        loadGridData();
    }

    loadGridData();

}]);