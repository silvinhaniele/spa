(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

  function UserService() {
    var service = this;

    var userArray = [];

    service.saveUser = function (user){
      if (!user) {
        return null;
      }

      console.log("user in service >>> " + user.dishFromServer.description);

      userArray = [];
      userArray.push(user);

      console.log(userArray[0]);
    }

    service.getUser = function () {
      return userArray[0];
    }

  }
})();
