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
		controller : function (tenseData, word, validate) {
			var vm = this;			
			// Share Selected Subject with Service
			vm.changed = function () {
				word.SetTense(vm.selected);
			};			
			
			tenseData.all()
			.success(function (data) {
				vm.tenses = data;
				for (var i = 0; i < vm.tenses.length; i++) {
					if (vm.tenses[i].Swahili === '-na-') {
						vm.selected = vm.tenses[i];
					}
				}
				vm.changed();
			});
		},
		controllerAs : 'TenseCtrl'
	};
});