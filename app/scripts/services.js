(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ServiceId = 'getAllPokemons';

  function Service() {
    this.pokemons = function() {
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

  app.service(ServiceId, Service);

})();
