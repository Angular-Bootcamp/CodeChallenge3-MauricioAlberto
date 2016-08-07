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
