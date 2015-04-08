angular.module('cpLib').factory('AuthenticationFactory', function(ApiService) {
    return {
        login: loginDetails => ApiService.post(`/user/login`, loginDetails),

        register: registerDetails => ApiService.post(`/user/register`, registerDetails),

        requestResetEmail: email => ApiService.post(`/user/request-reset-email`, email),

        setPassword: resetDetails => ApiService.post(`/user/set-password`, resetDetails)
    };
});
