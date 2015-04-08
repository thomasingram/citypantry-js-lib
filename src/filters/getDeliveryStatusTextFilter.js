angular.module('cpLib').filter('getDeliveryStatusText', function() {
    return function(deliveryStatus) {
        switch (deliveryStatus) {
            case 1:
                return 'Left the kitchen';
            case 2:
                return 'Late < 15 mins';
            case 3:
                return 'Late > 15 mins - call';
            case 4:
                return 'Delivered';
            default:
                return 'Unknown';
        }
    };
});
