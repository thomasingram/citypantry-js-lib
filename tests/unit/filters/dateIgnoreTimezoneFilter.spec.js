describe('dateIgnoreTimezone filter', function() {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    it('should call the date filter with the timezone removed', inject(function(dateIgnoreTimezoneFilter) {
        expect(dateIgnoreTimezoneFilter('2015-05-05T12:12:12Z', 'H:mm')).toEqual('12:12');
        expect(dateIgnoreTimezoneFilter('2015-05-05T12:12:12+0300', 'H:mm')).toEqual('12:12');
        expect(dateIgnoreTimezoneFilter('2015-05-05T12:12:12+03:00', 'H:mm')).toEqual('12:12');
        expect(dateIgnoreTimezoneFilter('2015-05-05T12:12:12-1030', 'H:mm')).toEqual('12:12');
        expect(dateIgnoreTimezoneFilter('2015-05-05T12:12:12-10:30', 'H:mm')).toEqual('12:12');
    }));
});
