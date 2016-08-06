(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ServiceId = 'pokemonAction';
  app.service(ServiceId, Service);

  Service.$inject = ['localStorage'];

  function Service(localStorage) {
    var vm = this;

    vm.caugthUp = localStorage.get("caugthUp") ? localStorage.get("caugthUp") : [];
    vm.box = localStorage.get("battleBox") ? localStorage.get("battleBox") : [];

    vm.caugth = function(id) {

      var key = "caugthUp";
      // how to prevent duplicate in array push
      var index = vm.caugthUp.indexOf(id);

      // Add Pokemon
      if( index === -1) {
        vm.caugthUp.push(id);
      }
      // Delete Pokemon
      else {
        if(vm.box.indexOf(id) >= 0) {
          console.log("You cannot remove this pokemon, it is your Battle Box");
          return;
        }
        vm.caugthUp.splice( index, 1);
      }

      localStorage.set(key, vm.caugthUp);

    };

    vm.battleBox = function(id) {
      var key = "battleBox";
      var index = vm.box.indexOf(id);

      // Add Pokemon
      if( index === -1) {
        if(vm.caugthUp.indexOf(id) >= 0){
          if (vm.box.length >= 6) {
            console.log("Battle Box Limit exceeded");
            return;
          }else {
            vm.box.push(id);
          }
        }else {
          console.log("You haven't captured this Pokemon");
        }
      }
      // Delete Pokemon
      else {
        vm.box.splice(index, 1);
      }

      localStorage.set(key, vm.box);
    };

    vm.isActive = function(id, model) {
      return model.indexOf(id) > -1;
    };
  }
})();
