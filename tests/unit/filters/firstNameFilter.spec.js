describe('firstName filter', function() {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    it('should return only the first name from a two-name string', inject(function(firstNameFilter) {
        expect(firstNameFilter('Bunny Boyd')).toEqual('Bunny');
    }));

    it('should return only the first name from a one-name string', inject(function(firstNameFilter) {
        expect(firstNameFilter('Bunny')).toEqual('Bunny');
        expect(firstNameFilter('Bunny-Bun')).toEqual('Bunny-Bun');
        expect(firstNameFilter('BunnyBun')).toEqual('BunnyBun');
    }));

    it('should return only the first name from a three-name string', inject(function(firstNameFilter) {
        expect(firstNameFilter('Bunny Rabbit Boyd')).toEqual('Bunny');
    }));
});
