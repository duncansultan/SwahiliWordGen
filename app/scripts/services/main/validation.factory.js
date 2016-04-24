'use strict';

angular.module('swahiliApp.validation', [])
    .factory('validate', function validationFactory() {
        var factory = this;
        factory.validVerb = false;
        factory.invalidErrorMsg = '';

        // Validates Verb Tenses against Subject Forms (Positive/Negative)
        factory.ValidateTense = function(subject, tense) {
            return (subject.Form === tense.Form ? true : false);
        };

        // Validates Verb Endings by Origin and Subject Forms (Positive/Negative)
        factory.ValidateEnding = function(subject, tense, verb, ending) {
            switch (verb.Origin) {
                case 'Bantu':
                case 'Monosyllabic':
                    // Special validation rule for Monosyllabic and Bantu Verbs with a Negative Present Tense
                    if (subject.Form === 'Negative' && tense.Tense === 'Present') {
                        return (ending === '-i' ? true : false);
                    }
                    return (ending === '-a' ? true : false);
                case 'Arabic (i)':
                    return (ending === '-i' ? true : false);
                case 'Arabic (u)':
                    return (ending === '-u' ? true : false);
                case 'Arabic (e)':
                    return (ending === '-e' ? true : false);
            }
            return false;
        };
        return factory;
    });