'use strict';

/**
 * @ngdoc function
 * @name swahiliApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the swahiliApp
 */
angular.module('swahiliApp')
// Controller to handle the 2nd "tense" spinner
.directive('tenseSelector', function () {
	return {
		restrict : 'E',
		templateUrl : 'views/main/directives/tense-selector.html',
		controller : function (tenseData, word) {
			var vm = this;
			
			// Share Selected Subject with Service
			vm.changed = function () {
				word.setTense(vm.selected);
			};			
			
			tenseData.all()
			.success(function (data) {
				vm.tenses = data;
				vm.selected = vm.tenses[1];
				vm.changed();
			});


		},
		controllerAs : 'TenseCtrl'
	};
});