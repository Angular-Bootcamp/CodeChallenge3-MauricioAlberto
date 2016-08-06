(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'DescriptionCtrl';

  Controller.$inject = ['$routeParams', '$filter', 'localStorage', 'pokemonAction'];

  app.controller(ControllerId, Controller);

  function Controller($routeParams, $filter, localStorage, pokemonAction) {
    var vm = this;

    function activate() {

      vm.caugthUp = pokemonAction.caugthUp;
      vm.box = pokemonAction.box;

      vm.caugth = pokemonAction.caugth;

      vm.battleBox = pokemonAction.battleBox;

      vm.isActive = pokemonAction.isActive;
      // We filter the array by id, the result is an array
      // so we select the element 0
      vm.id = $routeParams.id;
      vm.pokemons = localStorage.get("pokemons");

      vm.pokemon = $filter('filter')( vm.pokemons, function(data){
        return data.id == vm.id;
      })[0];

      }

    activate();
  }

})();
