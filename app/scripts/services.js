(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ServiceId = 'getAllPokemons';
  app.service(ServiceId, Service);

  function Service() {
    var vm = this;
    vm.pokemons = function() {
      return [{
        id:"001",
        name:"bulbasaur",
        type:["poison","grass"]
      },{
        id:"002",
        name:"ivysaur",
        type:["poison","grass"],
        level:16
      }];
    };
  }
})();
