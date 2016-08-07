(function() {
  'use strict';

  angular
    .module('pokedexApp')
    .filter('capitalize', filter);

  function filter(){
    return function(input){
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
  }

})();
