angular.module("myApp").controller("actionCtrl", [
  "$q", "$scope", "$timeout", "$document", function($q, $scope, $timeout, $document) {
  	
    $scope.swoop = function() {
      $('.about').velocity('transition.swoopIn', 1500);           
      $('.action-row').velocity('transition.swoopIn', 1500);  
    };

    $scope.animateCalloutDiv = function(action) {
      $(".about").velocity("callout." + action);
    };    
    
    $document.ready($scope.swoop);
    $document.on('page:load', $scope.swoop);
    
  }
]);

$(function() {
  $( "li" ).each(function( index ) {
    console.log( index + ": " + $( this ).text() );
  });
});
