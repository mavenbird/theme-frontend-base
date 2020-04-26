define([
    'jquery',
    'domReady!'
], function ($) {
    'use strict';

    // use custom js script here
	$( "#newsletter-validate-detail" ).submit(function( event ) {
	  alert( "This is just a test." );
	  return false;
	});
});