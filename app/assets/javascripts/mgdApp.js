angular.module("myApp").controller("actionCtrl", [
  "$q", "$scope", function($q, $scope) {

		$(document).ready(function() {
			// $('.git').velocity({
			//   rotateX: '360deg',
			//   rotateY: '360deg'
			// },{
			//   duration: 2500,
			//   easing:'linear'
			// });					
			$('.about').velocity('transition.swoopIn', 1500);						
			$('.action-row').velocity('transition.swoopIn', 1500);						
		});

    $scope.animateCalloutDiv = function(action) {
      $(".about").velocity("callout." + action);
    };    
  }
]);