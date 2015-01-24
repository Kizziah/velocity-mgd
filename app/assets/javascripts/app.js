
/**
 * @ngdoc overview
 * @name awfulWordplayApp
 * @description
 * # awfulWordplayApp
 *
 * Main module of the application.
 */
angular.module('myApp', []);

// angular.module('myApp').directive('swing', [
//     function($compile) {
//       return {
//         restrict: 'A',
//         scope: {},
//         link: function(scope, elm, attrs) {
//           scope.remove = function() {            
//             elm.remove();
//           };         

//           scope.swing = function() {            
//             $("div.swing").velocity("callout.swing");

//           };

//           elm.removeAttr("swing"); // Prevents loop
//           elm.attr('ng-click', "swing()");
//           $compile(elm)(scope);
//         },

//      };
// }]);

// angular.module('myApp').directive('swooping', ['$compile',
//     function($compile) {
//       return {
//         restrict: 'A',
//         scope: {},
//         link: function(scope, elm, attrs) {
//           scope.remove = function() {            
//             elm.remove();
//           };         

//           scope.swooping = function() {            
//             $("div.swooping").velocity("transition.swoopOut");
//           };

//           elm.removeAttr("swooping"); // Prevents loop
//           elm.attr('ng-click', "swooping()");
//           $compile(elm)(scope);
//         },

//      };
// }]);

// myApp.directive('bounce', ['$compile',
//     function($compile) {
//       return {
//         restrict: 'A',
//         scope: {},
//         link: function(scope, elm, attrs) {
    
//           scope.bounce = function() {            
//             $("div.bounce").velocity("callout.bounce");
//           };

//           elm.removeAttr("bounce"); // Prevents loop
//           elm.attr('ng-click', "bounce()");
//           $compile(elm)(scope);
//         },

//      };
// }]);

// myApp.directive('boomerang', ['$compile',
//     function($compile) {
//       return {
//         restrict: 'A',
//         scope: {},
//         link: function(scope, elm, attrs) {
       
//           scope.boomerang = function() {         
//             $('div.box').velocity({
//               rotateY: '360deg'
//             },{
//               duration:1000,
//               easing:'linear'
//             });
//           };

//           elm.removeAttr("boomerang"); // Prevents loop
//           elm.attr('ng-click', "boomerang()");
//           $compile(elm)(scope);
//         },

//      };
// }]);



angular.module('myApp').directive('myDraggable', ['$document', function($document) {
  return function(scope, element, attr) {
    var startX = 0, startY = 0, x = 0, y = 0;

    element.css({
     position: 'relative',
     cursor: 'pointer'
    });

    element.on('mousedown', function(event) {
      // Prevent default dragging of selected content
      event.preventDefault();
      startX = event.pageX - x;
      startY = event.pageY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    function mousemove(event) {
      y = event.pageY - startY;
      x = event.pageX - startX;
      element.css({
        top: y + 'px',
        left:  x + 'px'
      });
    }

    function mouseup() {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }
  };
}]);