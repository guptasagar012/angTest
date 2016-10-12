'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'sections/home/home.html',
            controller: 'HomeController as home'
        })
        .when('/', {
            templateUrl: 'sections/header/header.html',
            controller: 'HeaderController as header'
        })
        .when('/contact', {
            templateUrl: 'sections/contact/contact.html',
            controller: 'ContactController as contact'
        })
        .when('/view', {
            templateUrl: 'sections/view/view.html',
            controller: 'ViewController as view'
        })
        .otherwise({
            redirectTo: '/'
        });
}