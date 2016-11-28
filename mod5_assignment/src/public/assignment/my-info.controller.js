(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService', 'ApiPath'];
  function MyInfoController(UserService, ApiPath) {
    var $ctrl = this;

    $ctrl.user = UserService.getUser();
    $ctrl.basePath = ApiPath;

    console.log($ctrl.user);
  }

})();
