angular.module('cpLibIntegration', [])
    .constant('API_BASE', 'http://api-base')
    .service('ApiAuthService', function() {
        return function() {
            return {
                userId: 'abc123',
                authToken: 'zzzzzz'
            }
        };
    });
