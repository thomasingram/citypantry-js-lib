describe('slugify filter', function() {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    it('should replace slash characters so they do not interfere with our routing definitions', inject(function(slugifyFilter) {
        expect(slugifyFilter('a/b')).toEqual('a-b');
    }));

    it('should replace space characters so they do not mess up the address bar', inject(function(slugifyFilter) {
        expect(slugifyFilter('a b')).toEqual('a-b');
    }));

    it('should not remove an entire string', inject(function(slugifyFilter) {
        expect(slugifyFilter('/')).toEqual('-');
    }));

    it('should slugify real package names to an appropriate slug', inject(function(slugifyFilter) {
        expect(slugifyFilter('The Fat Controller Vs 3:10 to Yuma (w/ FRIES) - 12Hr. Beef Rib & 10Hr. Pulled Pork.'))
            .toEqual('the-fat-controller-vs-3:10-to-yuma-(w-fries)-12hr.-beef-rib-&-10hr.-pulled-pork');
    }));
});
