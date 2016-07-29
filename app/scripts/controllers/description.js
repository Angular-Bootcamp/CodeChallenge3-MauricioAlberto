(function() {
  'use strict';

  var app = angular.module('pokedexApp');
  var ControllerId = 'DescriptionCtrl';

  function Controller() {
    var vm = this;

    function activate() {
      vm.pokemons = [{
        id:"001",
        name:"bulbasaur",
        type:["poison","grass"]
      },{
        id:"002",
        name:"ivysaur",
        type:["poison","grass"],
        level:16
      }];
    }

    activate();
  }

  app.controller(ControllerId, Controller);
})();
