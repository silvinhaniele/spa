(function () {
'use strict';

  angular.module('MenuApp')
  .component('showItems', {
    templateUrl: 'src/restaurant/templates/category-items-list.template.html',
    bindings: {
      items: '<'
    }
  });

})();
