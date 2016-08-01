(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'MainCtrl';

  Controller.$inject = ['Pokemons', 'orderByFilter'];

  app.controller(ControllerId, Controller);

  function Controller(Pokemons, orderBy) {
    var vm = this;

    activate();

    function activate() {

      return getPokemons().then(function(pokemons) {

        // vm.reverse = false;
        // vm.pokemons = orderBy(pokemons, "id" , vm.reverse);
        //
        // vm.order = function() {
        //   vm.reverse =  vm.reverse ? false : true;
        //   vm.pokemons = orderBy(pokemons, "id" , vm.reverse);
        // };

        vm.pokemons = pokemons;
        vm.order = function() {
          vm.pokemons = pokemons.reverse();
        };
      });

    }
    function getPokemons() {
      return Pokemons.getPokemons()
        .then(function(data) {
          //vm.pokemons = data;
          return data;
        });
    }

  }

})();
