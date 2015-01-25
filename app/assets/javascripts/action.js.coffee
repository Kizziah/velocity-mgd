
angular.module("myApp").controller "actionCtrl", [
  "$q"
  "$scope"
  ($q, $scope) ->
    $scope.swings = ->
      $("div.swing").velocity "callout.swing"
      return        

    $scope.bounces = ->
      $("div.bounce").velocity "callout.bounce"
      return    


]
