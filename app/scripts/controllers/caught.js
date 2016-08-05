(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'CaughtCtrl';

  Controller.$inject = ['Pokemons', 'orderByFilter', 'localStorage'];

  app.controller(ControllerId, Controller);

  function Controller(Pokemons, orderBy, localStorage) {
    var vm = this;

    activate();

    function activate() {
      vm.caugthUp = localStorage.get("caugthUp") ? localStorage.get("caugthUp") : [];
      vm.box = localStorage.get("battleBox") ? localStorage.get("battleBox") : [];

      vm.caugth = function(id) {
        var key = "caugthUp";
        // how to prevent duplicate in array push
        var index = vm.caugthUp.indexOf(id);

        // Add Pokemon
        if( index === -1) { vm.caugthUp.push(id); }
        // Delete Pokemon
        else { vm.caugthUp.splice( index, 1); }

        localStorage.set(key, vm.caugthUp);

        //localStorageService.remove("caugthUp");

      };

      vm.battleBox = function(id) {
        var key = "battleBox";
        // how to prevent duplicate in array push
        var index = vm.box.indexOf(id);

        // Add Pokemon
        if( index === -1) { vm.box.push(id); }
        // Delete Pokemon
        else { vm.box.splice( index, 1); }

        localStorage.set(key, vm.box);
      };

      vm.isActive = function(id, model) {
        return model.indexOf(id) > -1;
      };

      return getPokemons().then(function(pokemons) {

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

    function getPokemons() {
      return Pokemons.getPokemons()
        .then(function(data) {
          //vm.pokemons = data;
          return data;
        });
    }

  }

})();
