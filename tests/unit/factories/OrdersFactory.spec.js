describe('OrdersFactory', function () {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    var OrdersFactory;
    var $httpBackend;

    beforeEach(inject(function(_OrdersFactory_, _$httpBackend_) {
        OrdersFactory = _OrdersFactory_;
        $httpBackend = _$httpBackend_;
    }));

    describe('getNextCustomerOrder', function() {
        it('should resolve to the nearest placed order from an array of orders of varying dates and statuses', function() {
            $httpBackend.expectGET('http://api-base/orders/by-current-customer').respond({
                orders: [
                    {id: 1, statusText: 'not_placed', requestedDeliveryDate: '2020-02-01T12:00:00Z'},
                    {id: 2, statusText: 'pending_vendor_approval', requestedDeliveryDate: '2020-02-03T12:00:00Z'},
                    {id: 3, statusText: 'accepted', requestedDeliveryDate: '2020-02-02T12:00:00Z'},
                ],
            });

            var result;
            OrdersFactory.getNextCustomerOrder().then(function(_result_) {
                result = _result_;
            });
            $httpBackend.flush();

            expect(result.id).toBe(3);
            $httpBackend.verifyNoOutstandingExpectation();
        });

        it('should resolve to null if there are no orders', function() {
            $httpBackend.expectGET('http://api-base/orders/by-current-customer').respond({
                orders: [],
            });

            var result;
            OrdersFactory.getNextCustomerOrder().then(function(_result_) {
                result = _result_;
            });
            $httpBackend.flush();

            expect(result).toBe(null);
            $httpBackend.verifyNoOutstandingExpectation();
        });
    });
});
