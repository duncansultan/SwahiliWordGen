'use strict';

/**
 * @ngdoc overview
 * @name swahiliApp
 * @description
 * # swahiliApp
 *
 * Main module of the application.
 */

angular
  .module('swahiliApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'swahiliApp.data',
	'swahiliApp.verbParts',
	'kendo.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main/index.html',
        controller: 'MainController',
        controllerAs: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about/index.html'
      })
	  .when('/subjectCollection', {
        templateUrl: 'scripts/resources/subject.collection.json'
      })	  
	  .when('/tenseCollection', {
        templateUrl: 'scripts/resources/tense.collection.json'
      })		
	  .when('/objectCollection', {
        templateUrl: 'scripts/resources/object.collection.json'
      })	  
      .when('/verbsCollection', {
        templateUrl: 'scripts/resources/verb.collection.json'
      })
      .when('/endingCollection', {
        templateUrl: 'scripts/resources/ending.collection.json'
      })	  
      .otherwise({
        redirectTo: '/'
      });
  });