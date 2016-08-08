(function() {
  'use strict';

  angular
    .module('pokedexApp')
    .service('evolutionService', Service);

  Service.$inject = ['$filter'];

  function Service($filter) {
    var vm = this;

    vm.getEvolutions = function(pokemons, evolutions) {

      Array.prototype.customIndexOf = function(searchElement) {
        return this.map(function(value) {
          // Return: array value (string lowercase)
          return value.toLowerCase();
          // searchElement value (string lowercase)
        }).indexOf(searchElement.toLowerCase());
      };

      return $filter('filter')(pokemons, function(data){
        return (evolutions.customIndexOf(data.name) >= 0);
      });
    };

  }

})();
