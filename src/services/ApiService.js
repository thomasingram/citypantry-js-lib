angular.module('cpLib').service('ApiService', function($http, ApiAuthService, API_BASE) {
    function addAuthHeaders(config = {}) {
        config.headers = config.headers || {};
        config.headers['X-CityPantry-UserId'] = ApiAuthService().userId;
        config.headers['X-CityPantry-AuthToken'] = ApiAuthService().authToken;

        return config;
    }

    return {
        get: function(url, config) {
            config = addAuthHeaders(config);

            return $http.get(API_BASE + url, config);
        },

        post: function(url, data, config) {
            config = addAuthHeaders(config);

            return $http.post(API_BASE + url, data, config);
        },

        put: function(url, data, config) {
            config = addAuthHeaders(config);

            return $http.put(API_BASE + url, data, config);
        },

        'delete': function(url, config) {
            config = addAuthHeaders(config);

            return $http.delete(API_BASE + url, config);
        },

        getAuthHeaders: function() {
            return {
                'X-CityPantry-UserId': ApiAuthService().userId,
                'X-CityPantry-AuthToken': ApiAuthService().authToken,
            };
        }
    };
});
