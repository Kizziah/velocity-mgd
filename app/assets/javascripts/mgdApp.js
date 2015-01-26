angular.module("myApp").controller("actionCtrl", [
  "$q", "$scope", function($q, $scope) {
    var box = $('div.box').clone(true);

		$(document).ready(function() {
			$('.git').velocity({
			  rotateX: '360deg',
			  rotateY: '360deg'
			},{
			  duration: 2500,
			  easing:'linear'
			});			

			// $('img#pdr1').velocity({
			//   rotateX: '360deg',
			//   rotateY: '360deg'
			// },{
			//   duration: 2500,
			//   easing:'linear'
			// });

			
		});

	  $scope.boomerang = function() {         

	    $('div.box').velocity({
				rotateY: '360deg'
			}, 1000, function() {
				$('div.box').remove();
				$('.box-holder').append(box);
	    });
	  };    

	  $scope.vlsoptions = [
	    { label: 'Git Icon', value: 'git' },
	    { label: 'About Title', value: 'about' }
	  ];
	  
	  $scope.vlsoptionsSelected = $scope.vlsoptions[1];

    $scope.animateCalloutDiv = function(action) {
      $("." + $scope.vlsoptionsSelected.value).velocity("callout." + action);
    };    
		$scope.distanceSelected = 1;
  }
]);