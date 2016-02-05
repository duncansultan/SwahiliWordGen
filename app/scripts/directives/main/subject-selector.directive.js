'use strict';

/**
 * @ngdoc function
 * @name swahiliApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the swahiliApp
 */
angular.module('swahiliApp')
// Controller to handle the 1st "subject" spinner
.directive('subjectSelector', function () {
	return {
		restrict : 'E',
		templateUrl : 'views/main/directives/subject-selector.html',
		controller : function (subjectData, word) {
			var vm = this;

			// Share Selected Subject with Service
			vm.changed = function () {
				word.setSubject(vm.selected);
			};
			
			subjectData.all()
			.success(function (data) {
				vm.subjects = data;
				vm.selected = vm.subjects[2];
				vm.changed();
			});


		},
		controllerAs : 'SubjectCtrl'
	};
});