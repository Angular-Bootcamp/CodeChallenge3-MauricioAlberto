(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'MainCtrl';

  function Controller(pokemons) {
    var vm = this;

    function activate() {
      vm.pokemons = pokemons.getAll;
    }
    activate();
  }

  app.controller(ControllerId, Controller);
})();
