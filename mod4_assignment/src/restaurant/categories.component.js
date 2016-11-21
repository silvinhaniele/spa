(function () {
'use strict';

  angular.module('MenuApp')
  .component('showCategories', {
    templateUrl: 'src/restaurant/templates/categories-list.template.html',
    bindings: {
      categoriesList: '<'
    }
  });

})();
