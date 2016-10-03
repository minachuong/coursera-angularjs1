(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = "list comma separated dishes you usually have for lunch";
    $scope.lunch_status = "Did you eat too much?";
    $scope.too_much = function () {
      var string_of_items = $scope.items;
      if (string_of_items.split(" ").length > 3) {
        $scope.lunch_status = "No, never enough!"
      } else if (string_of_items.split(" ").length === 3) {
        $scope.lunch_status = "Pen Pineapple Apple Pen!"
      } else {
        $scope.lunch_status = "Yeah, try some chipotle peanuts or FIVE."
      };
    };
}
})();
