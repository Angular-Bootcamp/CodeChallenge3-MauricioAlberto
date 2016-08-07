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
