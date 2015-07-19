

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
       .state('view1', {
           url: '/view1',
           templateUrl: 'view1/view1.html',
           controller: 'View1Ctrl'
       })
      
}])

.controller('View1Ctrl', ['$state', '$scope', 'dataServices', function ($state, $scope, dataServices) {

    $scope.fn1 = function () {
        $state.go("datepic1");
    }

    $scope.gridOptions = "delete";;

    $scope.gridData = dataServices.gridData;

    //directive code Example



}]);