'use strict';
angular
    .module('app.core')
    .controller('ContactController', function($scope, ValuesData) {
        //Set page title and description
        ValuesData.title = "CONTACT";
        ValuesData.description = "Contact for Nearet";
        //Setup view model object
        var vm = this;
    }
    );