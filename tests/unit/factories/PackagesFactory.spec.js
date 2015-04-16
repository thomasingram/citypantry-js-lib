describe('PackagesFactory', function () {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    var PackagesFactory;
    var ApiService;

    beforeEach(inject(function(_PackagesFactory_, _ApiService_) {
        PackagesFactory = _PackagesFactory_;
        ApiService = _ApiService_;
    }));

    describe('getPackagingTypeOptions', function() {
        var result;

        beforeEach(function() {
            result = PackagesFactory.getPackagingTypeOptions();
        });

        it('should return three packaging types', function() {
            expect(result.length).toBe(3);
        });

        it('should return objects with a value and the related text label', function() {
            expect(result[0].value).toBe(1);
            expect(result[0].label).toBe('Individual');
        });
    });

    describe('searchPackages', function() {
        it('should build the URL with multiple event type IDs', function() {
            spyOn(ApiService, 'get');

            PackagesFactory.searchPackages(undefined, undefined, undefined, undefined, undefined, undefined,
                ['aaa', 'bbb']);

            expect(ApiService.get).toHaveBeenCalled();
            expect(ApiService.get.calls.mostRecent().args[0])
                .toContain('eventTypeIds[]=aaa&eventTypeIds[]=bbb');
        });
    });

    describe('getPackageDeliveryTimeOptions', function() {
        it('should return an array of objects, each with a label and a value', function() {
            var result = PackagesFactory.getPackageDeliveryTimeOptions(700, 1400);
            expect(result[0]).toEqual({label: '07:00', value: 700});
        });

        it('should space each time the specified interval apart', function() {
            var result = PackagesFactory.getPackageDeliveryTimeOptions(700, 1400, 25);
            expect(result[0].value).toBe(700);
            expect(result[1].value).toBe(725);
            expect(result[2].value).toBe(750);
            expect(result[3].value).toBe(815);
            expect(result[4].value).toBe(840);
            expect(result[5].value).toBe(905);
        });

        it('should format the start of the day as 00:00', function() {
            var result = PackagesFactory.getPackageDeliveryTimeOptions(0, 30);
            expect(result[0]).toEqual({label: '00:00', value: 0});
        });

        it('should format the end of the day as 24:00', function() {
            var result = PackagesFactory.getPackageDeliveryTimeOptions(2300, 2400, 15);
            expect(result[4]).toEqual({label: '24:00', value: 2400});
        });
    });
});
