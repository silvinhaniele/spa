(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home state
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurant/templates/home.template.html'
  })

  // Categories state
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/restaurant/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      categoriesList: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items state
  .state('categoryItems', {
    url: '/categories-detail/{catShortName}',
    templateUrl: 'src/restaurant/templates/category-items.template.html',
    controller: "CategoryItemsController as items",
    resolve: {
      items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.catShortName);
              }]
    }
  });

}

})();
