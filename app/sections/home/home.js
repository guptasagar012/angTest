'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope, PageValues) {
        //Set page title and description
        PageValues.title = "HOME";
        PageValues.description = "Nearet- Anything Anywhere";
        //Setup view model object
        var vm = this;
    }
    );