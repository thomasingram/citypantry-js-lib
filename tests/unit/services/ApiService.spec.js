describe('ApiService', function () {
    'use strict';

    var ApiService;
    var $httpBackend;

    beforeEach(function () {
        module('cpLib');
    });

    beforeEach(inject(function(_ApiService_, _$httpBackend_) {
        ApiService = _ApiService_;
        $httpBackend = _$httpBackend_;
    }));

    describe('getAuthHeaders', function() {
        it('should return the authentication headers with the correct values', function() {
            expect(ApiService.getAuthHeaders()).toEqual({
                'X-CityPantry-UserId': 'abc123',
                'X-CityPantry-AuthToken': 'zzzzzz'
            });
        });
    });

    describe('get', function() {
        it('should prepend the URL with the correct base URL', function() {
            $httpBackend.expectGET('http://api-base/example').respond();

            ApiService.get('/example');

            $httpBackend.verifyNoOutstandingExpectation();
        });

        it('should use apply the authentication headers', function() {
            $httpBackend.expectGET('http://api-base/example', function(headers) {
                expect(headers['X-CityPantry-UserId']).toBe('abc123');
                expect(headers['X-CityPantry-AuthToken']).toBe('zzzzzz');
                return true;
            }).respond();

            ApiService.get('/example');

            $httpBackend.verifyNoOutstandingExpectation();
        });
    });
});
