(function() {
  'use strict';

  angular.module('pokedexApp', [
    'ngAnimate',
    'ngRoute'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/pokemon/:id', {
        templateUrl: 'views/description.html',
        controller: 'DescriptionCtrl',
        controllerAs: 'description'
      })
      .when('/caught', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/box', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();
