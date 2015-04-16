angular.module('cpLib').factory('PromoCodeFactory', function(ApiService) {
    return {
        getPromoCodeByCode: code => ApiService.get(`/promo-codes/get-by-code?code=${code}`)
    };
});
