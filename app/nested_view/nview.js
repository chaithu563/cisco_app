'use strict';

angular.module('myApp.nview', ['ui.router', 'ui.bootstrap'])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('nview', {
        url: '/nview',
        views: {
            '': {
                url: '',
                templateUrl: 'nested_view/nview.html',
                controller: 'nviewCtrl'
            },
                'header@nview': {
                  //  url: '',
                    templateUrl: 'nested_view/templates/header.html'
                   // controller: 'HeaderController'
                },
                'content@nview': {
                   // url:'',
                    templateUrl: 'nested_view/templates/content.html'
                   // controller: 'ContentController'
                },
                'footer@nview': {
                   // url: '',
                    templateUrl: 'nested_view/templates/footer.html'
                   // controller: 'FooterController'
                }
            }
       
    })

    //.state('home', {
    //    url: '/',
    //    views: {
    //        'header': {
    //            templateUrl: '/templates/partials/header.html',
    //            controller: 'HeaderController'
    //        },
    //        'content': {
    //            templateUrl: '/templates/partials/content.html',
    //            controller: 'ContentController'
    //        },
    //        'footer': {
    //            templateUrl: '/templates/partials/footer.html',
    //            controller: 'FooterController'
    //        }
    //    }
    //})

    //.state('shows', {
    //    url: '/shows',
    //    templateUrl: 'templates/shows.html',
    //    controller: 'ShowsController'
    //})
    //    .state('shows.detail', {
    //        url: '/detail/:id',
    //        templateUrl: 'templates/shows-detail.html',
    //        controller: 'ShowsDetailController'
    //    });
}])

.controller('nviewCtrl', ['$scope', '$http', , function ($scope, $http) {


    //$scope.today = function () {
    //	$scope.dt = new Date();
    //};
    //$scope.today();



   

}]);