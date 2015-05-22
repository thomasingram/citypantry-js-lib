angular.module('cpLib').factory('ReportingFactory', function(ApiService) {
    return {
        queryDatabase: (query) => {
            const config = {
                // Angular will try to parse responses as JSON by default. The response from this
                // API can be in any format, so turn off the JSON parsing,
                transformResponse: [function(responseContent) {
                    return responseContent;
                }]
            };
            return ApiService.post(`/reporting/database-query`, {query: query}, config);
        },
    };
});
