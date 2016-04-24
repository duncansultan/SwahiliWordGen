'use strict';

/**
 * @ngdoc function
 * @name swahiliApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the swahiliApp
 */
angular.module('swahiliApp')
// Controller to handle the last "Ending" spinner
.directive('endingSelector', function () {
	return {
		restrict : 'E',
		templateUrl : 'views/main/directives/ending-selector.html',
		controller : function (endingData, word, validate) {
			var vm = this;
			// Share Selected Ending with Service
			vm.changed = function () {
				word.SetEnding(vm.selected);
			};
			
			endingData.all()
			.success(function (data) {
				vm.endings = data;
				for (var i = 0; i < vm.endings.length; i++) {
					if (vm.endings[i] === '-a') {
						vm.selected = vm.endings[i];
					}
				}
				vm.changed();
			});
		},
		controllerAs : 'EndingCtrl'
	};
});