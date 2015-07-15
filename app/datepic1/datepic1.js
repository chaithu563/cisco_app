'use strict';

angular.module('myApp.datepic1', ['ui.router','ui.bootstrap'])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('datepic1', {
        url: '/datepic1',
        templateUrl: 'datepic1/datepic1.html',
        controller: 'datepic1Ctrl'
    })
}])

.controller('datepic1Ctrl', ['$scope','$http',,function ($scope,$http) {


	//$scope.today = function () {
	//	$scope.dt = new Date();
	//};
	//$scope.today();



	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];


	$scope.open = function ($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	//var tomorrow = new Date();
	//tomorrow.setDate(tomorrow.getDate() + 1);
	//var afterTomorrow = new Date();
	//afterTomorrow.setDate(tomorrow.getDate() + 2);
   // $scope.events =
   //[
   //  {
   //  	date: tomorrow,
   //  	status: 'full'
   //  },
   //  {
   //  	date: afterTomorrow,
   //  	status: 'partially'
   //  }
   //];
	//$scope.getDayClass = function (date, mode) {
	//	if (mode === 'day') {
	//		var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

	//		for (var i = 0; i < $scope.events.length; i++) {
	//			var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

	//			if (dayToCheck === currentDay) {
	//				return $scope.events[i].status;
	//			}
	//		}
	//	}

	//	return '';
	//};

}]);