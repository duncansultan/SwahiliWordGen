'use strict';

 // Service for Sharing Verb Parts for Conjugation and Validation
 angular.module('swahiliApp.data', [])
  .factory('subjectData', function subjectDataFactory($http) {
	 return {
		 all: function() {
			 return $http({method: 'GET', url: '/resources/subject.collection.json'});
			 }
	 };
 })
  .factory('tenseData', function tenseDataFactory($http) {
	 return {
		 all: function() {
			 return $http({method: 'GET', url: '/resources/tense.collection.json'});
			 }
	 };
 })
  .factory('objectData', function objectDataFactory($http) {
	 return {
		 all: function() {
			 return $http({method: 'GET', url: '/resources/object.collection.json'});
			 }
	 };
 })
 .factory('verbData', function verbDataFactory($http) {
	 return {
		 all: function() {
			 return $http({method: 'GET', url: '/resources/verb.collection.json'});
			 }
	 };
 })
  .factory('endingData', function endingDataFactory($http) {
	 return {
		 all: function() {
			 return $http({method: 'GET', url: '/resources/ending.collection.json'});
			 }
	 };
 });