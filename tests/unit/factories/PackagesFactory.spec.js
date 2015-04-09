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
});
