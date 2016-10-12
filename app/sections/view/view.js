'use strict';
angular
    .module('app.core')
    .controller('ViewController', function($scope, DataWord) {
        //Set page title and description
        DataWord.title = "VIEW";
        DataWord.description = "For View";
        //Setup view model object
        var vm = this;
    }
    );