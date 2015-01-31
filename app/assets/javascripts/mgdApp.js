angular.module("myApp").controller("actionCtrl", [
  "$q", "$scope", "$timeout", "$document", function($q, $scope, $timeout, $document) {
  	
		function swoop() {
			$('.about').velocity('transition.swoopIn', 1500);						
			$('.action-row').velocity('transition.swoopIn', 1500);	
		};

		$document.on('page:load', swoop());

    $scope.animateCalloutDiv = function(action) {
      $(".about").velocity("callout." + action);
    };    
  }
]);
