'use strict';
angular
    .module('app.core')
    .controller('HeaderController', function($scope) {
       $scope.elements = [
    {
    	"Header1"	: "Home"
	},{
		"Header2"	: "Contact"
	},{
    	"Header3"	: "View",

	}
	]
});