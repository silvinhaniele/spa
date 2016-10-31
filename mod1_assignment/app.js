(function () {
  'use strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$injector'];

  function LunchCheckController($scope, $injector) {
    $scope.items = "";
    $scope.message = "";

    $scope.checkItems = function() {
      if($scope.items === "") {
        $scope.message = showEmptyMessage();
        return;
      }

      var itemsArray = $scope.items.split(',');

      if(itemsArray.length <= 3) {
        $scope.message = showEnjoyMessage();
      } else {
        $scope.message = showTooMuchMessage();
      }
    }

    $injector.annotate(LunchCheckController);
  }

  function showEnjoyMessage() {
    return "Enjoy!";
  }

  function showTooMuchMessage(){
    return "Too Much!!";
  }

  function showEmptyMessage(){
    return "Please enter data first.";
  }

})();
