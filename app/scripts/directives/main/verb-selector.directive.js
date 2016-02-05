'use strict';

/**
 * @ngdoc function
 * @name swahiliApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the swahiliApp
 */
angular.module('swahiliApp')
// Controller to handle the 4th "verb" spinner
.directive('verbSelector', function () {
	return {
		restrict : 'E',
		templateUrl : 'views/main/directives/verb-selector.html',
		controller : function (verbData, word) {
			var vm = this;

			// Share Selected Verb with Service
			vm.changed = function () {
				word.setVerb(vm.selected);
			};

			verbData.all()
			.success(function (data) {
				vm.verbs = data;
				for (var i = 0; i < vm.verbs.length; i++) {
					if (vm.verbs[i].Swahili === '-penda') {
						vm.selected = vm.verbs[i];
					}
				}
				vm.changed();
			});

		},
		controllerAs : 'VerbCtrl'
	};
});
