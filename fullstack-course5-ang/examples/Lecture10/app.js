(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

// minification looks for $inject so that services are included in minification
DIController.$inject = ['$scope', '$filter'];

function DIController($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();
