(function () {
'use strict';

  angular.module('MenuApp')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['items'];
  function CategoryItemsController(items) {
    var $ctrl = this;
    $ctrl.categoryItemsList = [];

    for (var item in items) {
      $ctrl.categoryItemsList.push(items[item]);
    }

    console.log('got to CategoryItemsController >>> ok! ' + $ctrl.categoryItemsList);
  }

})();
