'use strict';
angular.module('myApp.view1', ['ui.router','ui.grid'])

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

    $scope.gridOptions = {
    };

    $scope.gridOptions.columnDefs = [
	  { name: 'id' },
	  { name: 'name' },
	  { name: 'age' },
	  { name: 'gender' },
	  { name: 'email' },
    ];
    $scope.gridOptions.data = [];
    $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi1 = gridApi;
    };
    $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
    .success(function (data) {
    	$scope.gridOptions.data = data;
    });


}]);