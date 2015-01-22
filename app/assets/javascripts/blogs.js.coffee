# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
# swing = ->
# 	$("div.swing").velocity("callout.swing")

$ ->
	swing = ->
		$("div.swing").velocity("callout.swing")

	swing()
	$("div.flip-out").velocity("transition.flipBounceXOut")
	$("div.swooping").velocity("transition.swoopOut").velocity("transition.swoopIn");

	$.SyntaxHighlighter.init();
	