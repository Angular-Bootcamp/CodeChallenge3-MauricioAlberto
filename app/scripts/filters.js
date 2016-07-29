(function() {
    'use strict';

    var app = angular.module('pokedexApp');
    var filterId = 'capitalize';

    function filter(){
      return function(input){
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
      };
    }
    app.filter(filterId, filter);
})();
