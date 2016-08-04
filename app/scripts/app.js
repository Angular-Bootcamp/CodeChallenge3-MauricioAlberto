(function() {
  'use strict';

  angular.module('pokedexApp', [
    'ngAnimate',
    'ngRoute',
    'LocalStorageModule'
  ]).config(function ($routeProvider, localStorageServiceProvider) {

    $routeProvider
      .when('/', {
        title: 'All Pokemon',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/pokemon/:id', {
        title: 'Description',
        templateUrl: 'views/description.html',
        controller: 'DescriptionCtrl',
        controllerAs: 'vm'
      })
      .when('/caught', {
        title: 'Caught Pokemon',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/box', {
        title: 'Battle Box',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

    localStorageServiceProvider.setPrefix('pokedexApp');
    localStorageServiceProvider.setStorageType('localtorage');
  });

})();
