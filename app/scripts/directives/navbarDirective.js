(function() {
  'use strict';

  angular
    .module('pokedexApp')
    .directive('navbarDirective', directive);

  function directive() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'views/templates/navbar.html',
      link: linkFunc,
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

      scope.goBack = function(title) {
        if (title == "Description") {
          scope.navbarId = "";  // Desactive navbar collapse
          history.go(-1);       // Back go
          return false;
        }else{
          scope.navbarId = "navbar-collapse";         // Active navbar collapse
          $(".navbar-toggle").toggleClass("active");
        }
      };

    }
  }
})();
