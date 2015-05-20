describe('dietaryRequirementsFormatter filter', function() {
    'use strict';

    var expectToBeTrustedHtml;

    var vegan = {id: 'aaa', name: 'Vegan'};
    var halal = {id: 'bbb', name: 'Halal'};

    beforeEach(function() {
        module('cpLib');
    });

    beforeEach(inject(function (dietaryRequirementsFormatterFilter, $sce) {
        expectToBeTrustedHtml = function(expectedHtml, input) {
            var actual = dietaryRequirementsFormatterFilter(input);
            expect(actual.constructor.name).toBe('TrustedValueHolderType');

            var untrusted = $sce.getTrustedHtml(actual);
            expect(untrusted).toBe(expectedHtml);
        };
    }));

    it('should format empty dietary requirements correctly', function() {
        expectToBeTrustedHtml(
            'None.',
            {
                customInstructions: '',
                requirements: []
            }
        );
    });

    it('should format dietary requirements with only custom instructions correctly', function() {
        expectToBeTrustedHtml(
            'Custom instructions:<br />Hello<br /><br />I am a rabbit.',
            {
                customInstructions: 'Hello\n\nI am a rabbit.\n',
                requirements: []
            }
        );
    });

    it('should format dietary requirements with only requirements correctly', function() {
        expectToBeTrustedHtml(
            '5: Vegan + Halal<br />1: Halal',
            {
                customInstructions: '',
                requirements: [
                    {headCount: 5, requirements: [vegan, halal]},
                    {headCount: 1, requirements: [halal]},
                ]
            }
        );
    });

    it('should format complex dietary requirements correctly', function() {
        expectToBeTrustedHtml(
            '5: Vegan + Halal<br />1: Halal<br />Custom instructions:<br />Rawr',
            {
                customInstructions: 'Rawr',
                requirements: [
                    {headCount: 5, requirements: [vegan, halal]},
                    {headCount: 1, requirements: [halal]},
                ]
            }
        );
    });
});
