'use strict';

angular.module('myApp', []);

angular.module('myApp').directive('swing', ['$compile',
    function($compile) {
      return {
        restrict: 'A',
        scope: {},
        link: function(scope, elm, attrs) {

          scope.swing = function() {            
            $("div.about").velocity("callout.swing");

          };

          elm.removeAttr("swing"); // Prevents loop
          elm.attr('ng-click', "swing()");
          $compile(elm)(scope);
        },

     };
}]);

angular.module('myApp').directive('bounce', ['$compile',
    function($compile) {
      return {
        restrict: 'A',
        scope: {},
        link: function(scope, elm, attrs) {
    
          scope.bounce = function() {            
            $("div.bounce").velocity("callout.bounce");
          };

          elm.removeAttr("bounce"); // Prevents loop
          elm.attr('ng-click', "bounce()");
          $compile(elm)(scope);
        },

     };
}]);

$(function() {
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 750, 'easeInOutExpo');
    event.preventDefault();
  });
});

