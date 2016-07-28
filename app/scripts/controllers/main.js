'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('MainCtrl', function($scope) {
    $scope.pokemons = [{
      id:"001",
      name:"bulbasaur",
      type:["poison","grass"]
    },{
      id:"002",
      name:"ivysaur",
      type:["poison","grass"],
      level:16
    }];
  });
