(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'DescriptionCtrl';

  Controller.$inject = ['$routeParams', '$filter', 'localStorage', 'pokedexAction', "evolutionService"];

  app.controller(ControllerId, Controller);

  function Controller($routeParams, $filter, localStorage, pokedexAction, evolutionService) {
    var vm = this;

    function activate() {
      vm.id = $routeParams.id;

      vm.caugthUp = pokedexAction.caugthUp;
      vm.box = pokedexAction.box;

      vm.caugth = pokedexAction.caugth;
      vm.battleBox = pokedexAction.battleBox;
      vm.isActive = pokedexAction.isActive;

      vm.pokemons = localStorage.get("pokemons");

      vm.pokemon = $filter('filter')(vm.pokemons, function(data){
        return data.id == vm.id;
      })[0];

      vm.evolutions = evolutionService.getEvolutions(vm.pokemons, vm.pokemon.evolution);

    }

    activate();
  }

})();
