(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'CaughtCtrl';

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

      return Pokemons.getPokemons().then(function(pokemons) {

        vm.pokemons = $filter('filter')( pokemons, function(data){
          return (vm.caugthUp.indexOf(data.id) >= 0);
        });

        vm.order = function() {
          vm.pokemons = vm.pokemons.reverse();
        };

      });

    }

  }

})();
