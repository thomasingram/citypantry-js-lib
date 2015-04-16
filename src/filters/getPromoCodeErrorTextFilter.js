angular.module('cpLib').filter('getPromoCodeErrorText', function() {
    return function(code) {
        return 'Promo code ' + code + ' has expired';
    };
});
