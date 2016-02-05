'use strict';

angular.module('swahiliApp.verbParts', [])
.factory('word', function wordFactory() {

	var factory = this;

	factory.subject = {
        'Swahili': '',
        'English': '',
		'NounClass': null,
		'Form': null
	};

	factory.tense = {
        'Swahili': '',
        'English': '',
		'Grammer': null,
		'Form': null
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
	
	factory.valid = true;
	
	factory.validMessage = '';

	factory.setSubject = function (item) {
		this.subject = item;
		factory.validateCombined(true);
	};

	factory.setTense = function (item) {
		this.tense = item;
		factory.validateCombined();
	};

	factory.setObject = function (item) {
		this.object = item;
		factory.validateCombined();
	};

	factory.setVerb = function (item) {
		this.verb = item;
		factory.validateCombined();
	};

	factory.setEnding = function (item) {
		this.ending = item;
		factory.validateCombined();
	};

	// Validates Verb Endings by Origin and Subject Forms (Positive/Negative)
	factory.validateByOriginForm = function (verbOrigin, subjectForm, ending) {
		if (verbOrigin === 'Bantu' && ending === 'a' && subjectForm === 'Positive') {
			return true;
		} else if (verbOrigin === 'Monosyllabic' && ending === 'a' && subjectForm === 'Positive') {
			return true;
		} else if (verbOrigin === 'Bantu' && ending === 'i' && subjectForm === 'Negative') {
			return true;
		} else if (verbOrigin === 'Monosyllabic' && ending === 'i' && subjectForm === 'Negative') {
			return true;
		} else if (verbOrigin === 'Arabic (i)' && ending === 'i') {
			return true;
		} else if (verbOrigin === 'Arabic (u)' && ending === 'u') {
			return true;
		} else if (verbOrigin === 'Arabic (e)' && ending === 'e') {
			return true;
		} else {
			return false;
		}
	};

	// Validates Verb Tenses against Subject Forms (Positive/Negative)
	factory.validateByTenseForm = function (tense, subjectForm) {
		if (subjectForm === 'Positive' && tense !== null){
			return true;
		} else if (subjectForm === 'Negative' && tense === null){
			return true;
		} else {
			return false;		
		}
	};

	// Performs complete validation
	factory.validateCombined = function () {
		var validOriginForm = false;
		var validTenseForm = false;
		
		validOriginForm = factory.validateByOriginForm(factory.verb.Origin, factory.subject.Form, factory.ending);
		validTenseForm = factory.validateByTenseForm(factory.tense.Grammer, factory.subject.Form);
		
		if (validOriginForm && validTenseForm){
			this.valid = true;
			this.validMessage = '';
		} else {
			this.valid = false;	
			if(validTenseForm === false){
				this.validMessage = 'The Tense is incorrect';
			}
			else if (validOriginForm === false) {
				this.validMessage = 'The Ending is incorrect';			
			}
		}
		

	};

	return factory;
});