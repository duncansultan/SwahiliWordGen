'use strict';

angular.module('swahiliApp')
    // Controller to handle validation of all the other spinners
    .controller('MainController', function($scope, word, validate) {
        var vm = this;
        vm.word = word;
        vm.validate = validate;
        vm.fullWordSwahili = '';
        vm.fullWordEnglish = '';
        vm.isValidEnding = false;
        vm.isValidTense = false;
        vm.validVerb = false;
        vm.alertClass = {};
        vm.alertGlyphicon = {};

        $scope.$watch(function() {
                return word;
            },
            function(newVal, oldVal) {
                vm.word = newVal;
                vm.oldWord = oldVal;
                vm.SetMessages();
            }, true);
        
        vm.SetMessages = function () {
            // Build full Swahili Word
            vm.fullWordSwahili = vm.word.subject.Swahili.replace('-', '') +
                vm.word.tense.Swahili.replace('-', '').replace('-', '').replace('-', '').replace('(', '').replace(')', '') +
                //vm.word.object.Swahili..replace('-', '').replace('-', '').replace('-', '').replace('(', '').replace(')', '') +
                vm.word.verb.Swahili.replace('-', '').replace('(', '').replace(')', '').replace(/[0-9]/g, '').replace(' ', '').slice(0, -1) +
                vm.word.ending.replace('-', '');
            // Build rough English Translation
            vm.fullWordEnglish = vm.word.subject.English + ' ' +
                vm.word.tense.English + ' ' +
                vm.word.verb.English;
            // Validate against Grammer Rules
            vm.isValidEnding = vm.validate.ValidateEnding(word.subject, word.tense, word.verb, word.ending);
            vm.isValidTense = vm.validate.ValidateTense(word.subject, word.tense);
            // Verify all validations
            vm.validVerb = (vm.isValidEnding && vm.isValidTense ? true : false);
            // Build Error Messages
            if (!vm.isValidEnding) {
                vm.invalidErrorMsg = 'Please change the verb ending';
            } else if (!vm.isValidTense) {
                vm.invalidErrorMsg = 'Please make sure the Subject and Tense match in their Positive/Negative form';
            } else {
                vm.invalidErrorMsg = 'Unknown error';
            }
            // Build Success/Fail and Glyphicon Message
            if (vm.validVerb) {
                vm.alertClass = 'alert alert-success';
                vm.alertglyphicon = 'glyphicon glyphicon-exclamation-sign';
                vm.message = 'Correct';
            } else {
                vm.alertClass = 'alert alert-danger';
                vm.alertGlyphicon = 'glyphicon glyphicon-exclamation-sign';
                vm.message = 'Try Again...';
            }
        };
    });