

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', function ($stateProvider) {
  //  $stateProvider.when('/view1', {
  //    templateUrl: 'view1/view1.html',
  //    //templateUrl: 'view1/view1.css',
  //  controller: 'View1Ctrl'
    //});

    $stateProvider
       .state('view1', {
           url: '/',
           templateUrl: 'view1/view1.html',
           controller: 'View1Ctrl'
       })
      
}])

.controller('View1Ctrl', [function() {


}]);