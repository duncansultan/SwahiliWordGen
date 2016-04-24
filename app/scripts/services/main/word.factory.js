'use strict';

angular.module('swahiliApp.word', [])
.factory('word', function wordFactory() {
	var factory = this;
	factory.subject = {
		'Swahili' : '',
		'English' : '',
		'NounClass' : '',
		'Form' : ''
	};
	factory.tense = {
		'Swahili' : '',
		'English' : '',
		'Tense' : '',
		'Form' : ''
	};
	factory.object = {
		'Swahili' : '',
		'English' : '',
		'NounClass' : ''
	};
	factory.verb = {
		'Swahili' : '',
		'English' : '',
		'Origin' : ''
	};
	factory.ending = '';

	factory.SetSubject = function (item) {
		factory.subject = item;
	};
	factory.SetTense = function (item) {
		factory.tense = item;
	};
	factory.SetObject = function (item) {
		factory.object = item;
	};
	factory.SetVerb = function (item) {
		factory.verb = item;
	};
	factory.SetEnding = function (item) {
		factory.ending = item;
	};
	return factory;
});