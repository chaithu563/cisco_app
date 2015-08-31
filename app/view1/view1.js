'use strict'
angular.module('myApp.view1', ['ui.router','ui.grid','ui.grid.pagination'])

.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
       .state('view1', {
           url: '/view1',
           templateUrl: 'view1/view1.html',
           controller: 'View1Ctrl'
       })
      
}])

.controller('View1Ctrl', ['$state', '$scope', 'dataServices', '$http', function ($state, $scope, dataServices, $http) {

    $scope.fn1 = function () {
        $state.go("datepic1");
    }

    $scope.gridOptions1 = "delete";

    $scope.gridData = dataServices.gridData;

    //directive code Example

    //ui-grid
    var paginationOptions = {
        pageNumber: 1,
        pageSize: 25,
        sort: null
    };

    $scope.gridOptions = {
        enableFiltering: true,
        enableColumnResize: true,
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.gridApi.core.on.sortChanged($scope, function (grid, sortColumns) {
                if (sortColumns.length == 0) {
                    paginationOptions.sort = null;
                } else {
                    paginationOptions.sort = sortColumns[0].sort.direction;
                }
                getPage();
            });
            gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                paginationOptions.pageNumber = newPage;
                paginationOptions.pageSize = pageSize;
                getPage();
            });
        }
    };

    //$scope.gridOptions.columnDefs = [
	//  { name: 'id' },
	//  { name: 'name' },
	//  { name: 'age' },
	//  { name: 'gender' },
	//  { name: 'email' },
    //];
    $scope.gridOptions.columnDefs = [
	 { name: 'name' },
      { name: 'gender', enableSorting: false },
      { name: 'company', enableSorting: false }
	 
    ];
    $scope.gridOptions.data = [];

    var myPosts = 'http://jsonplaceholder.typicode.com/posts';
    var myuserdet = 'https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json';
    //$http.get(myPosts)
    //.success(function (data) {
    //	$scope.gridOptions.data = data;
    //});


    var getPage = function () {
        var url;
        url = 'https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json';

        $http.get(url)
        .success(function (data) {
            $scope.gridOptions.totalItems = 100;
            var firstRow = (paginationOptions.pageNumber - 1) * paginationOptions.pageSize;
            $scope.gridOptions.data = data.slice(firstRow, firstRow + paginationOptions.pageSize);
        });
    };

    getPage();


}]);