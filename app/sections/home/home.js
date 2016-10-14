'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope) {
       $scope.values = [
   {
      "Name" : "Sagar",
      "ID" 	 : '1',
      "Age"  : '22'
   },
	
   {
      "Name" : "Sunil",
      "ID" 	 : '2',
      "Age"  : '23'
   },
	
   {
      "Name" : "Aman",
      "ID" 	 : '3',
      "Age"  : '24'
   },
	
   {
      "Name" : "Harsh",
      "ID" 	 : '4',
      "Age"  : '25'
   }
]

       });