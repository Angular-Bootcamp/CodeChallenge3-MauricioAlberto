(function() {
  'use strict';

  angular
      .module('pokedexApp')
      .factory('Pokemons', factory);

  factory.$inject = ['$http'];

  function factory($http) {

    return {
        getPokemons: getPokemons
    };

    function getPokemons() {
      return $http.get('/data/pokemons.json')
        .then(getPokemonsComplete)
        .catch(getPokemonsFailed);

      function getPokemonsComplete(response) {
        return response.data;
      }

      function getPokemonsFailed(error) {
        console.log('XHR Failed for getPokemons.' + error.data);
      }
    }

  }

})();
