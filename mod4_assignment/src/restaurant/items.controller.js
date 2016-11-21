(function () {
'use strict';

  angular.module('MenuApp')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['items'];
  function CategoryItemsController(items) {
    var $ctrl = this;
    $ctrl.items = [];

    for (var i = 0; i < items.menu_items.length; i++) {
      console.log(items.menu_items[i]);
      $ctrl.items.push(items.menu_items[i]);
    }

    console.log('got to CategoryItemsController >>> ok! ' + $ctrl.items.length);
  }

})();
