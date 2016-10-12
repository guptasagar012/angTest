'use strict';
angular
    .module('app.core')
    .controller('HeaderController', [$scope. function($scope) {
        //Set page title and description
        $scope.headers = [
        {
        	name: 'Home'
        	]
        },
        {
        	name: 'Contact'

        }
       ];
    }]);
