(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
          .controller('NarrowItDownController', NarrowItDownController)
          .service('MenuSearchService', MenuSearchService)
          .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
          .controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
          .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;

    narrowCtrl.searchTerm = "";
    narrowCtrl.found = [];
    narrowCtrl.isListEmpty = false;

    narrowCtrl.removeItem = function (itemIndex) {
      narrowCtrl.found.splice(itemIndex, 1);
    };

    narrowCtrl.searchItems = function () {
      var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);

      promise.then(function (response) {
        console.log('response in promise.then >>> ' + response);

        narrowCtrl.found = response;

        if(narrowCtrl.found.length === 0) {
          narrowCtrl.isListEmpty = true;
        } else {
          narrowCtrl.isListEmpty = false;
        }
      })
    };

    narrowCtrl.listEmpty = function () {
      return narrowCtrl.isListEmpty;
    }
  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
                    method: "GET",
                    url: (ApiBasePath + "/menu_items.json")
                  })
            .then(function (response) {
                    var foundItems = [];

                    if(searchTerm === "") {
                      return foundItems;
                    }

                    for (var item in response.data.menu_items) {
                      if (response.data.menu_items[item].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                        foundItems.push(response.data.menu_items[item]);
                      }
                    }

                    console.log('found items >>> ' + foundItems.length);

                    return foundItems;
            });
    };
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: 'FoundItemsDirectiveController as foundItems',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var foundItemsCtrl = this;

    foundItemsCtrl.listEmpty = function () {
      return (foundItemsCtrl.items.length === 0);
    };
  }
})();
