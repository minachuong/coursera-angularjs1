(function() {
  // prevents variables from being accidentally defined in global scope
  'use strict';

  // bound to html using ng-app="myFirstApp"
  angular.module('myFirstApp',[])

  // bound to div using ng-controller="MyFirstController"
  .controller('MyFirstController', function($scope){
    $scope.name = "Mina";
    $scope.sayHello = function () {
      return "Hello?";
    };

  });

})();
