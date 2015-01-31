angular.module("myApp").controller("actionCtrl", [
  "$q", "$scope", "$timeout", "$document", function($q, $scope, $timeout, $document) {

		$timeout(function() {
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

			function swoop() {
				alert("Hello");
		 	// $('.action-row').velocity('transition.swoopIn', 1500);
			};

		$document.on('page:load', swoop());

    $scope.animateCalloutDiv = function(action) {
      $(".about").velocity("callout." + action);
    };    
  }
]);

