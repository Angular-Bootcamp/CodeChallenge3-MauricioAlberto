(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'MainCtrl';
  Controller.$inject = ['Pokemons', 'orderByFilter'];
  app.controller(ControllerId, Controller);

  function Controller(Pokemons, orderBy) {
    var vm = this;

    function activate() {
      var pokemons = Pokemons.getAll;

      vm.reverse = false;
      vm.pokemons = orderBy(pokemons, "id" , vm.reverse);

      vm.order = function() {
        vm.reverse =  vm.reverse ? false : true;
        vm.pokemons = orderBy(pokemons, "id" , vm.reverse);
      };

    }
    activate();
  }

})();
