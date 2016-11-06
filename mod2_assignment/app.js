(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
         .controller('ToBuyController', ToBuyController)
         .controller('AlreadyBoughtController', AlreadyBoughtController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var itemBuyer = this;

    itemBuyer.itemsToBuy = ShoppingListCheckOffService.getToBuyItems();

    itemBuyer.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtItemDisplayer = this;

    boughtItemDisplayer.itemsAlreadyBought = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [];
    var alreadyBoughtItems = [];

    toBuyItems = loadToBuyList();

    service.buyItem = function (itemIndex) {
      var boughtItem = removeFromToBuyItems(itemIndex);

      addToAlreadyBoughtItems(boughtItem[0]);
    };

    function addToAlreadyBoughtItems (item) {
      alreadyBoughtItems.push(item);
    };

    function removeFromToBuyItems (itemIndex) {
      return toBuyItems.splice(itemIndex, 1);
    };

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
    };

    function createItem (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };

      return item;
    };

    function loadToBuyList() {
      var items = [];

      items.push(createItem('cookies', 10));
      items.push(createItem('ice cream', 20));
      items.push(createItem('chocolate bar', 30));
      items.push(createItem('soda can', 40));
      items.push(createItem('candies', 50));

      return items;
    }
  }

})();
