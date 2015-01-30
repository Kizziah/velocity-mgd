'use strict';

/**
 * @ngdoc overview
 * @name awfulWordplayApp
 * @description
 * # awfulWordplayApp
 *
 * Main module of the application.
 */
angular.module('myApp', []);

angular.module('myApp').directive('swing', ['$compile',
    function($compile) {
      return {
        restrict: 'A',
        scope: {},
        link: function(scope, elm, attrs) {

          scope.swing = function() {            
            $("div.swing").velocity("callout.swing");

          };

          elm.removeAttr("swing"); // Prevents loop
          elm.attr('ng-click', "swing()");
          $compile(elm)(scope);
        },

     };
}]);

angular.module('myApp').directive('swooping', ['$compile',
    function($compile) {
      return {
        restrict: 'A',
        scope: {},
        link: function(scope, elm, attrs) {

          scope.swooping = function() {            
            $("div.swooping").velocity("transition.swoopOut");
          };

          elm.removeAttr("swooping"); // Prevents loop
          elm.attr('ng-click', "swooping()");
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

angular.module('myApp').directive('boomerang', ['$compile',
    function($compile) {
      return {
        restrict: 'A',
        scope: {},
        link: function(scope, elm, attrs) {
       
          scope.boomerang = function() {         
            $('div.box').velocity({
              rotateY: '360deg'
            },{
              duration:1500,
              easing:'linear'
            });
            $("div.box").velocity("transition.flipBounceYOut");

          };

          elm.removeAttr("boomerang"); // Prevents loop
          elm.attr('ng-click', "boomerang()");
          $compile(elm)(scope);
        },

     };
}]);

angular.module('myApp').directive('moveRight', ['$compile',
    function($compile) {
      return {
        restrict: 'A',
        scope: {},
        link: function(scope, elm, attrs) {
            var cloneElement = elm;
            scope.resetDiv = function () {
            };


            scope.boomerang = function() {         
              $('div.box').velocity({
                rotateY: '360deg'
              },{
                duration:1500,
                easing:'linear'
              });
            };

            scope.moveRight = function() {
              $('#move-right').velocity({
                  opacity: 0.85,
                  left: "+=200px",
                  height: "+=60px"
                }, 2000, function() {
                  scope.boomerang()
                });
            };

            elm.removeAttr("move-right"); // Prevents loop
            elm.attr('ng-click', "moveRight()");
            $compile(elm)(scope);        
        },

     };
}]);

//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//   if ($(".navbar").offset().top > 50) {
//     $(".navbar-fixed-top").addClass("top-nav-collapse");
//   } else {
//     $(".navbar-fixed-top").removeClass("top-nav-collapse");
//   }
// });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 750, 'easeInOutExpo');
    event.preventDefault();
  });

  // var $container = $('#container');
  // initialize Masonry after all images have loaded  
  // $container.imagesLoaded( function() {
    // $container.masonry();
  // });
});

