(function() {
  'use strict';

  angular
    .module('pokedexApp')
    .factory('Pokemons', factory);

  factory.$inject = ['$filter', '$http', '$window', 'localStorage'];

  function factory($filter,$http, $window, localStorage) {

    return {
        getPokemons: getPokemons,
        //getCaughtList: getCaughtList,
        //getBattleBox: getBattleBox,
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

(function() {
  'use strict';

  angular
      .module('pokedexApp')
      .factory('localStorage', factory);

  factory.$inject = ['$window'];

  function factory($window) {

    return {
        get: getDataStorage,
        set: setDataStorage,
    };

    function setDataStorage(key, val) {
      if($window.localStorage) {
        $window.localStorage.setItem(key, JSON.stringify(val));
        return true;
      }else {
        throw new Error('Sorry! No Web Storage support..');
        return false;
      }
    }

    function getDataStorage(key) {
      if($window.localStorage) {
        return  JSON.parse($window.localStorage.getItem(key));
      }else {
        throw new Error('Sorry! No Web Storage support..');
        return false;
      }
    }

  }

})();
