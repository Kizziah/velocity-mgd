# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
# swing = ->
# 	$("div.swing").velocity("callout.swing")

$ ->
	$('.box').velocity({
	  rotateY: '360deg'
	},{
	  duration:4000,
	  easing:'linear'
	});

$(".blog").ready ->	
	$.SyntaxHighlighter.init();