(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ServiceId = 'pokemons';
  app.service(ServiceId, Service);

  function Service() {
    var vm = this;
    vm.getAll = [{
        id:"1",
        name:"bulbasaur",
        type:["poison","grass"]
      },{
        id:"2",
        name:"ivysaur",
        type:["poison","grass"],
        level:16
      }];
  }
})();
