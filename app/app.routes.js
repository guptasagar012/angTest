'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'sections/header/header.html',
            controller: 'HeaderController'
        })
        .when('/home', {
            templateUrl: 'sections/home/home.html',
            controller: 'HomeController'
        })
        .when('/contact', {
            templateUrl: 'sections/contact/contact.html',
            controller: 'ContactController'
        })
        .when('/view', {
            templateUrl: 'sections/view/view.html',
            controller: 'ViewController'
        })
        .otherwise({
            redirectTo: '/'
        });
}