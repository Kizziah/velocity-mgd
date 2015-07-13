angular.module("myApp").controller("actionCtrl", [
  "$q", "$scope", "$timeout", "$document", "$interval", function($q, $scope, $timeout, $document, $interval) {
    var usaflag = 'assets/flag.png';
  	var elephantflag = 'assets/map.png';

    $scope.flag = usaflag; 
    $scope.changeFlag = function() {
      if($scope.flag == usaflag) {
        $scope.flag = elephantflag;
      }
      else {
        $scope.flag = usaflag;
      }     
    };
      $interval(function () {
        
        $scope.changeFlag();
      }, 1000);    
  }
]);

    // $scope.swoop = function() {
    //   $('.about').velocity('transition.swoopIn', 1500);           
    //   $('.action-row').velocity('transition.swoopIn', 1500);  
    // };

    // $scope.animateCalloutDiv = function(action) {
    //   $(".about").velocity("callout." + action);
    // };   
   