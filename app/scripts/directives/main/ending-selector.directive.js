'use strict';

/**
 * @ngdoc function
 * @name swahiliApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the swahiliApp
 */
angular.module('swahiliApp')
// Controller to handle the 3rd "Object" spinner
// ***Note that object refers to the spoken language part of speech rather than a programming construct
.directive('endingSelector', function () {
	return {
		restrict : 'E',
		templateUrl : 'views/main/directives/ending-selector.html',
		controller : function (endingData, word) {
			var vm = this;
			
			// Share Selected Object with Service
			vm.changed = function () {
				word.setEnding(vm.selected);
			};
			
			endingData.all()
			.success(function (data) {
				vm.endings = data;
				vm.selected = vm.endings[1];
				vm.changed();
			});

		},
		controllerAs : 'EndingCtrl'
	};
});