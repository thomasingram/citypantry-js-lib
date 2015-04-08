angular.module('cpLib').filter('getOrderStatusText', function() {
    return function(status) {
        switch (status) {
            case 'not_placed':
                return 'Not placed';
            case 'pending_vendor_approval':
                return 'Pending vendor approval';
            case 'accepted':
                return 'Active';
            default:
                throw 'Unexpected status: ' + status;
        }
    };
});
