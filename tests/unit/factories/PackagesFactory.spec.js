describe('PackagesFactory', function () {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    describe('getPackagingTypeOptions', function() {
        var result;

        beforeEach(inject(function(PackagesFactory) {
            result = PackagesFactory.getPackagingTypeOptions();
        }));

        it('should return three packaging types', function() {
            expect(result.length).toBe(3);
        });

        it('should return objects with a value and the related text label', function() {
            expect(result[0].value).toBe(1);
            expect(result[0].label).toBe('Individual');
        });
    });
});
