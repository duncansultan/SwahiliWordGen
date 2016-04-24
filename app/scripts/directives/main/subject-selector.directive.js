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
		controller : function (subjectData, word, validate) {
			var vm = this;
			// Share Selected Subject with Service
			vm.changed = function () {
				word.SetSubject(vm.selected);	
			};
			
			subjectData.all()
			.success(function (data) {
				vm.subjects = data;
				for (var i = 0; i < vm.subjects.length; i++) {
					if (vm.subjects[i].Swahili === 'ni-') {
						vm.selected = vm.subjects[i];
					}
				}
				vm.changed();
			});
		},
		controllerAs : 'SubjectCtrl'
	};
});