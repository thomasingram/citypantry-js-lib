describe('ApiService', function () {
    'use strict';

    var ApiService;

    beforeEach(function () {
        module('cpLib');
    });

    beforeEach(inject(function(_ApiService_) {
        ApiService = _ApiService_;
    }));

    describe('getAuthHeaders', function() {
        it('should return the authnetication headers with the correct values', function() {
            expect(ApiService.getAuthHeaders()).toEqual({
                'X-CityPantry-UserId': 'abc123',
                'X-CityPantry-AuthToken': 'zzzzzz'
            });
        });
    });
});
