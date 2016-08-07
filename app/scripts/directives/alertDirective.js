(function() {
  'use strict';

  angular
    .module('pokedexApp')
    .directive('alertDirective', directive);

  function directive(alertService) {
    var directive = {
      restrict: 'AE',
      //templateUrl: 'templateUrl',
      template: '<div class="alert ng-hide"  ng-class="alert.type" ng-show="alert.show" >{{alert.msg}}</div>',
      link: linkFunc,
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      scope.alert = alertService.alertObj;
    }

  }
})();
