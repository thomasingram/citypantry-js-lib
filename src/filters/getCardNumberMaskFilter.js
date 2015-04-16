angular.module('cpLib').filter('getCardNumberMask', function() {
    return function(last4, type) {
        if (type === 'American Express') {
            return 'XXXX XXXXXX X' + last4;
        } else {
            return 'XXXX XXXX XXXX ' + last4;
        }
    };
});
