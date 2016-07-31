angular.module('pokedexApp').run(['$rootScope', function($rootScope) {
  $rootScope.page = {
    setTitle: function(title){
      this.title = title;
    }
  }

  $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
    $rootScope.page.setTitle(current.$$route.title || "Pokedex");
  });
}]);
