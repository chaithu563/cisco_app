'use strict';

angular.module('myApp.datagrid', ['ui.router', 'underscore'])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('datagrid', {
        url: '/datagrid',
        templateUrl: 'datagrid/datagrid.html',
        controller: 'datagridCtrl'
    })
}])

.controller('datagridCtrl', ['$scope', '_', 'dataServices', 'promisServices', function ($scope, _, dataServices, promisServices) {


    $scope.addItem = function () {
        

        dataServices.addData();
       
        loadGridData();

    }

    function loadGridData() {
        //   $scope.gridData = dataServices.gridData;
        promisServices.getData().then(function (data) {

            $scope.gridData = data;
            $scope.$apply();
        });

    }

    $scope.deleteItem = function (item) {
        dataServices.deleteItem(item);
        loadGridData();
    }

    loadGridData();

}]);