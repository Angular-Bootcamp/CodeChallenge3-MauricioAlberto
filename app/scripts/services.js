(function() {
  'use strict';

  angular
    .module('pokedexApp')
    .service('pokemonAction', Service);

  Service.$inject = ['localStorage', 'alertService'];

  function Service(localStorage, alertService) {
    var vm = this;

    vm.caugthUp = localStorage.get("caugthUp") ? localStorage.get("caugthUp") : [];
    vm.box = localStorage.get("battleBox") ? localStorage.get("battleBox") : [];

    vm.caugth = function(id) {

      var key = "caugthUp";
      // how to prevent duplicate in array push
      var index = vm.caugthUp.indexOf(id);

      // Add Pokemon
      if( index === -1) {
        vm.caugthUp.push(id);
      }
      // Delete Pokemon
      else {
        if(vm.box.indexOf(id) >= 0) {
          alertService.info("You cannot remove this pokemon, it is your Battle Box");
          return;
        }
        vm.caugthUp.splice( index, 1);
      }

      localStorage.set(key, vm.caugthUp);

    };

    vm.battleBox = function(id) {
      var key = "battleBox";
      var index = vm.box.indexOf(id);

      // Add Pokemon
      if( index === -1) {
        if(vm.caugthUp.indexOf(id) >= 0){
          if (vm.box.length >= 6) {
            alertService.warning("Battle Box Limit exceeded");
            return;
          }else {
            vm.box.push(id);
          }
        }else {
          alertService.warning("You haven't captured this Pokemon");
        }
      }
      // Delete Pokemon
      else {
        vm.box.splice(index, 1);
      }

      localStorage.set(key, vm.box);
    };

    vm.isActive = function(id, model) {
      return model.indexOf(id) > -1;
    };
  }
})();

(function() {
  'use strict';

  angular
    .module('pokedexApp')
    .service('alertService', Service);

  //Service.$inject = ['alertService'];

  function Service($timeout) {
    var vm = this;

    vm.alertObj = {
      show: false,
      msg: '',
      type: 'alert-success'
    };

    vm.alertTypes = ['alert-success', 'alert-info', 'alert-warning', 'alert-danger'];

    vm.alert = function(type, msg) {
      vm.alertObj.show = true;
      vm.alertObj.msg = msg;
      vm.alertObj.type = vm.alertTypes[type];

      $timeout(function() {
        vm.alertObj.show = false;
      }, 4000);
    };

    vm.success  = function(msg){ vm.alert(0, msg);  };
    vm.info     = function(msg){ vm.alert(1, msg);  };
    vm.warning  = function(msg){ vm.alert(2, msg);  };
    vm.danger   = function(msg){ vm.alert(3, msg);  };
    vm.hide     = function(){ vm.alertObj.show = false; };

  }

})();

(function() {
  'use strict';

  angular
    .module('pokedexApp')
    .directive('alert', directive);

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
