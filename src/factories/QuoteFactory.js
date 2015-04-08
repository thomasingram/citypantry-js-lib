angular.module('cpLib').factory('QuoteFactory', function(ApiService) {
    return {
        sendQuote: quoteDetails => ApiService.post(`/quote/send-quote`, quoteDetails)
    };
});
