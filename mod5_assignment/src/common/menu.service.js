(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  var userArray = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
    if (!shortName) {
      return null;
    }

    return $http.get(ApiPath + '/menu_items/'+shortName+'.json').then(function (response) {
      return response.data;
    });
  };

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
