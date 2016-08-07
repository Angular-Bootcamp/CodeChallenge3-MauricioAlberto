(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'BattleBoxCtrl';

  Controller.$inject = ['$filter', 'Pokemons', 'orderByFilter', 'localStorage', 'pokemonAction'];

  app.controller(ControllerId, Controller);

  function Controller($filter, Pokemons, orderBy, localStorage, pokemonAction) {
    var vm = this;

    activate();

    function activate() {
      vm.caugthUp = pokemonAction.caugthUp;
      vm.box = pokemonAction.box;

      vm.caugth = pokemonAction.caugth;

      vm.battleBox = pokemonAction.battleBox;

      vm.isActive = pokemonAction.isActive;

      vm.listPokedex = function(item) {
        return (vm.box.indexOf(item.id) >= 0);
      };

      return Pokemons.getPokemons().then(function(pokemons) {

        vm.pokemons = pokemons;
        vm.order = function() {
          vm.pokemons = vm.pokemons.reverse();
        };

      });

    }

  }

})();
