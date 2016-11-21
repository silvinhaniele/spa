(function () {
'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categoriesList'];
  function CategoriesController(categoriesList) {
    var $ctrl = this;

    console.log('got to CategoriesController >>> ok! ' + categoriesList);

    $ctrl.categoriesList = [];

    for (var item in categoriesList) {
      $ctrl.categoriesList.push(categoriesList[item]);
    }

    console.log("$ctrl.categoriesList >>> " + $ctrl.categoriesList);
  }

})();
