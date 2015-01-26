
angular.module("myApp").controller "actionCtrl", [
  "$q"
  "$scope"
  ($q, $scope) ->

  	$scope.vlsaction = 
      "bo"

    $scope.vjscallout = (action, divL) ->
      $("div.#{divL}").velocity "callout.#{action}"
      return        

    $scope.bounces = ->
      $("div.bounce").velocity "callout.bounce"
      return    

]

    