angular.module('cpLib').factory('AuthenticationFactory', function(ApiService) {
    return {
        login: loginDetails => ApiService.post(`/user/login`, loginDetails),

        registerCustomer: registerDetails => ApiService.post(`/user/register-customer`, registerDetails),

        requestResetEmail: email => ApiService.post(`/user/request-reset-email`, email),

        setPassword: resetDetails => ApiService.post(`/user/set-password`, resetDetails)
    };
});
