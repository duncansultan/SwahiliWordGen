'use strict';

angular.module('swahiliApp')
// Controller to handle validation of all the other spinners
.controller('MainController', function ($scope, word) {
	var vm = this;
	vm.word = word;
	
	vm.alertClass = {};
	vm.alertGlyphicon = {};
	vm.valid = {};

	$scope.$watch(function () {
		return word;
	},
		function (newVal, oldVal) {
		vm.oldWord = oldVal;
		vm.word = newVal;
	
		 vm.fullWordSwahili = vm.word.subject.Swahili + 
		 vm.word.tense.Swahili + 
		 //vm.word.object.Swahili + 
		 vm.word.verb.Swahili.replace('-','').replace('(','').replace(')','').replace(/[0-9]/g, '').replace(' ','').slice(0, -1) + 
		 vm.word.ending;
		
		 vm.fullWordEnglish = vm.word.subject.English + ' ' +
		 vm.word.tense.English + ' ' +
		// //vm.word.object.English + ' ' +
		 vm.word.verb.English;
		
		 vm.validMessage = vm.word.validMessage;
		 vm.valid = vm.word.valid;

		 if (vm.valid === true) {
			 vm.alertClass = 'alert alert-success';
			 vm.alertglyphicon = 'glyphicon glyphicon-exclamation-sign';
			 vm.message = 'Correct';
		 } else {
			 vm.alertClass = 'alert alert-danger';
			 vm.alertGlyphicon = 'glyphicon glyphicon-exclamation-sign';
			
			 vm.message = 'Try Again...';
		 }
		
	}, true);
	
});