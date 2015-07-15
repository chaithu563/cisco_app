'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.datepic1',
  'myApp.version',
  'ui.bootstrap'
]).
config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    //$stateProvider.otherwise({ redirectTo: '/view1' });


}]);
