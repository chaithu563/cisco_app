'use strict';



angular.module('myApp.datagrid', ['ui.router', 'underscore'])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('datagrid', {
        url: '/datagrid',
        templateUrl: 'datagrid/datagrid.html',
        controller: 'datagridCtrl'
    })
}])

.controller('datagridCtrl', ['$scope','_', function ($scope,_) {

    $scope.gridData = [{ id:1, name: "Moroni", age: 50  , desc : "hero of the day1"},
                     { id: 2, name: "Tiancum", age: 43, desc: "hero of the day2" },
                     { id: 3, name: "Jacob", age: 27, desc: "hero of the day3" },
                     { id: 4, name: "Nephi", age: 29, desc: "hero of the day4" },
                     { id: 5, name: "Enos", age: 34, desc: "hero of the day5" }];

    $scope.addItem = function () {
        var max = _.max($scope.gridData, function (item) {
            return item.id;

        })

        var item = {id: max.id+1 , name:"", age:null , desc:"" }

        $scope.gridData.push(item);

    }

    $scope.deleteItem = function (item) {
        $scope.gridData=   _.filter($scope.gridData, function (eachitem) {
            return (eachitem.id !==item)

        })


    }

}]);