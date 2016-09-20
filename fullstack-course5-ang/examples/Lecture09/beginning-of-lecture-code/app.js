(function () {
'use strict';

angular.module('DIApp', [])
  .controller('DIController', DIController);

  function DIController ($scope, $filter) {
    $scope.name = "Yaakov";
    // $filter service transforms data
    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }

  function AnnotateMe(name, job, something) {
    return ":)";
  }

  // returns whatever the function returns
  console.log(AnnotateMe());

  // returns the function object
  console.log(AnnotateMe);

  // returns the function object as a string
  console.log(AnnotateMe.toString());

})();


// KEY CONCEPT: angular uses regex to figure out dependencies
