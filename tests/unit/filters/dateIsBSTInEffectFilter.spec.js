describe('dateIsBSTInEffect filter', function() {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    it('should return false for dates outside of British Summer Time', inject(function(dateIsBSTInEffectFilter) {
        expect(dateIsBSTInEffectFilter('2015-01-01T06:00:00Z')).toBe(false);
        expect(dateIsBSTInEffectFilter('2015-03-28T13:30:00Z')).toBe(false);
        expect(dateIsBSTInEffectFilter('2006-03-25T13:30:00Z')).toBe(false);
        expect(dateIsBSTInEffectFilter('2015-10-25T18:00:00Z')).toBe(false);
        expect(dateIsBSTInEffectFilter('2006-10-29T18:00:00Z')).toBe(false);
    }));

    it('should return true for dates inside of British Summer Time', inject(function(dateIsBSTInEffectFilter) {
        expect(dateIsBSTInEffectFilter('2015-03-29T06:00:00Z')).toBe(true);
        expect(dateIsBSTInEffectFilter('2006-03-26T06:00:00Z')).toBe(true);
        expect(dateIsBSTInEffectFilter('2015-07-01T13:30:00Z')).toBe(true);
        expect(dateIsBSTInEffectFilter('2015-10-24T18:00:00Z')).toBe(true);
        expect(dateIsBSTInEffectFilter('2006-10-28T18:00:00Z')).toBe(true);
    }));
});
