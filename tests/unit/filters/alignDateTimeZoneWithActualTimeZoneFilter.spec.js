describe('alignDateTimeZoneWithActualTimeZone filter', function() {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    it('should call the date filter and keep the zone designator \'Z\'', inject(function(alignDateTimeZoneWithActualTimeZoneFilter) {
        expect(alignDateTimeZoneWithActualTimeZoneFilter('2015-01-01T06:00:00Z')).toEqual('2015-01-01T06:00:00Z');
        expect(alignDateTimeZoneWithActualTimeZoneFilter('2015-03-28T13:30:00Z')).toEqual('2015-03-28T13:30:00Z');
        expect(alignDateTimeZoneWithActualTimeZoneFilter('2015-10-25T18:00:00Z')).toEqual('2015-10-25T18:00:00Z');
    }));

    it('should call the date filter and append the UTC offset \'+0100\'', inject(function(alignDateTimeZoneWithActualTimeZoneFilter) {
        expect(alignDateTimeZoneWithActualTimeZoneFilter('2015-03-29T06:00:00Z')).toEqual('2015-03-29T06:00:00+0100');
        expect(alignDateTimeZoneWithActualTimeZoneFilter('2015-07-01T13:30:00Z')).toEqual('2015-07-01T13:30:00+0100');
        expect(alignDateTimeZoneWithActualTimeZoneFilter('2015-10-24T18:00:00Z')).toEqual('2015-10-24T18:00:00+0100');
    }));
});
