(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserService'];
  function SignUpController(MenuService, UserService) {
    var $ctrl = this;

    $ctrl.user = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      favedish: "",
      dishFromServer: {}
    };

    $ctrl.validated = "";
    $ctrl.dishNotFound = "";

    console.log("$ctrl.user >>> " + $ctrl.user);

    $ctrl.submit = function () {
      console.log("favorite dish >>> " + $ctrl.user.favedish);

      var promise = MenuService.getMenuItem($ctrl.user.favedish);

      promise.then(function (response) {
        $ctrl.user.dishFromServer = response;

        UserService.saveUser($ctrl.user);

        $ctrl.validated = "Your information has been saved.";
        $ctrl.dishNotFound = "";

        console.log("OK!! :)");
      }).catch(function (errorResponse) {
        $ctrl.dishNotFound = "No such menu number exists.";
        $ctrl.validated = "";

        console.log(errorResponse.message);
      });
    }
  }

})();
