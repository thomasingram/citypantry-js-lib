angular.module('cpLib').filter('getNewInvoiceStatus', function(
        INVOICE_STATUS_AWAITING_PAYMENT, INVOICE_STATUS_PAID) {
    return function(status) {
        switch (status) {
            case 'awaiting_payment':
                return INVOICE_STATUS_PAID;
            case 'paid':
                return INVOICE_STATUS_AWAITING_PAYMENT;
            default:
                throw 'Unexpected status: ' + status;
        }
    };
});
