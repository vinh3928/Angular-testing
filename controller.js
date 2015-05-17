
nameApp.controller("NameCtrl", function ($scope) {
  $scope.names = ["Smith", "Jason", "Derude"];
  $scope.addName = function() {
    $scope.names.push($scope.enteredName);
    $scope.enteredName = "";
    };
    $scope.removeName = function(name) {
      var i = $scope.names.indexOf(name);
      $scope.names.splice(i, 1);
    };
});
