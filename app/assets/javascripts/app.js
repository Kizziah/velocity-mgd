angular.module('myApp', []);

function Ctrl($scope) {

  $scope.admin = false;
  $scope.step = 1;
  $scope.user = {};

  $scope.setStep = function(step){
    $scope.step = step;
  }

  $scope.verify = function(){
    $scope.step = 4;
    $scope.admin = true;
  }

  $scope.screenColor = function(color){
    document.body.style.background = color;
  }

}