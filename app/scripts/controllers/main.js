(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'MainCtrl';

  Controller.$inject = ['Pokemons', 'orderByFilter', 'localStorage', 'pokemonAction'];

  app.controller(ControllerId, Controller);

  function Controller(Pokemons, orderBy, localStorage, pokemonAction) {
    var vm = this;

    activate();

    function activate() {
      vm.caugthUp = pokemonAction.caugthUp;
      vm.box = pokemonAction.box;

      vm.caugth = pokemonAction.caugth;

      vm.battleBox = pokemonAction.battleBox;

      vm.isActive = pokemonAction.isActive;

      return  Pokemons.getPokemons().then(function(pokemons) {

        // vm.reverse = false;
        // vm.pokemons = orderBy(pokemons, "id" , vm.reverse);
        //
        // vm.order = function() {
        //   vm.reverse =  vm.reverse ? false : true;
        //   vm.pokemons = orderBy(pokemons, "id" , vm.reverse);
        // };

          vm.pokemons = pokemons;
          localStorage.set("pokemons", pokemons);

          vm.order = function() {
            vm.pokemons = pokemons.reverse();
          };

        });

    }


  }

})();
