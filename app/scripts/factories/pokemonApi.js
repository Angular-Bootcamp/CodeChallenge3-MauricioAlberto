(function() {
  'use strict';

  angular
    .module('pokedexApp')
    .factory('Pokemons', factory);

  factory.$inject = ['$filter', '$http', '$window', 'localStorage'];

  function factory($filter,$http, $window, localStorage) {

    return {
        getPokemons: getPokemons
    };

    function getPokemons() {
      return $http.get('/data/pokemons.json')
        .then(getPokemonsComplete)
        .catch(getPokemonsFailed);

      function getPokemonsComplete(response) {
        localStorage.set("pokemons", response.data);
        return response.data;
      }

      function getPokemonsFailed(error) {
        console.log('XHR Failed for getPokemons.' + error.data);
        return localStorage.get("pokemons");
      }
    }

  }

})();
