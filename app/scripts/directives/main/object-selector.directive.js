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
.directive('objectSelector', function () {
	return {
		restrict : 'E',
		templateUrl : 'views/main/directives/object-selector.html',
		controller : function (objectData, word) {
			var vm = this;
			
			// Share Selected Object with Service
			vm.changed = function () {
				word.setObject(vm.selected);
			};			
			
			objectData.all()
			.success(function (data) {
				vm.objects = data;
				vm.selected = vm.objects[0];
				vm.changed();
			});


		},
		controllerAs : 'ObjectCtrl'
	};
});