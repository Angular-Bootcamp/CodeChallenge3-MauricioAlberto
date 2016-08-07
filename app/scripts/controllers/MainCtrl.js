(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'MainCtrl';

  Controller.$inject = ['Pokemons', 'orderByFilter', 'localStorage', 'pokedexAction'];

  app.controller(ControllerId, Controller);

  function Controller(Pokemons, orderBy, localStorage, pokedexAction) {
    var vm = this;

    activate();

    function activate() {
      vm.caugthUp = pokedexAction.caugthUp;
      vm.box = pokedexAction.box;

      vm.caugth = pokedexAction.caugth;
      vm.battleBox = pokedexAction.battleBox;
      vm.isActive = pokedexAction.isActive;

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
