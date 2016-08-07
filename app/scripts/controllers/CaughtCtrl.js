(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'CaughtCtrl';

  Controller.$inject = ['Pokemons', 'pokedexAction'];

  app.controller(ControllerId, Controller);

  function Controller(Pokemons, pokedexAction) {
    var vm = this;

    activate();

    function activate() {
      vm.caugthUp = pokedexAction.caugthUp;
      vm.box = pokedexAction.box;

      vm.caugth = pokedexAction.caugth;
      vm.battleBox = pokedexAction.battleBox;
      vm.isActive = pokedexAction.isActive;

      vm.listPokedex = function(item) {
        return (vm.caugthUp.indexOf(item.id) >= 0);
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
